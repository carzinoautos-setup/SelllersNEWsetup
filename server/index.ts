import "dotenv/config";

// Instrument path-to-regexp to log patterns that cause parse errors
import express from "express";

// Try to instrument path-to-regexp using dynamic import (works in ESM)
// NOTE: ESM module namespace objects are read-only in many environments. Attempt
// to wrap the parse function only when it is safe; otherwise skip instrumentation.
try {
  import("path-to-regexp")
    .then((ptre: any) => {
      try {
        // Obtain the parse function from either the namespace or default export
        const candidateParse = ptre?.parse || ptre?.default?.parse || (typeof ptre === "function" ? ptre : null);
        if (!candidateParse || typeof candidateParse !== "function") {
          return;
        }

        // If the module namespace is writable for "parse", we can patch it.
        const nsDesc = Object.getOwnPropertyDescriptor(ptre, "parse");
        const defDesc = ptre?.default && Object.getOwnPropertyDescriptor(ptre.default, "parse");

        if ((nsDesc && nsDesc.writable) || (defDesc && defDesc.writable)) {
          const origParse = candidateParse;
          const wrapper = function (...args: any[]) {
            try {
              console.log("PTRE parse:", args[0]);
            } catch (e) {
              // ignore logging errors
            }
            return origParse.apply(this, args);
          };

          try {
            if (nsDesc && nsDesc.writable) {
              ptre.parse = wrapper;
            } else if (ptre.default && defDesc && defDesc.writable) {
              ptre.default.parse = wrapper;
            } else {
              console.warn("path-to-regexp parse exists but is not writable; skipping instrumentation");
            }
          } catch (e) {
            // Some runtimes will throw when attempting to assign to an ESM namespace.
            console.warn("Failed to assign wrapper to path-to-regexp.parse, skipping instrumentation", e);
          }
        } else {
          // Namespace not writable — skip instrumentation to avoid throwing in startup.
          console.warn("path-to-regexp.parse is not writable; skipping instrumentation");
        }
      } catch (errInner) {
        console.error("path-to-regexp instrumentation error", errInner);
      }
    })
    .catch((e) => {
      console.error("Failed dynamic import of path-to-regexp", e);
    });
} catch (err) {
  console.error("Failed to schedule path-to-regexp instrumentation", err);
}

import cors from "cors";
import { handleDemo } from "./routes/demo";

// Instrument route registration early to catch routers registered during module import
try {
  const proto: any = (express.Router as any).prototype;
  ["get", "post", "use", "all"].forEach((method) => {
    const orig = proto[method];
    proto[method] = function (path: any, ...args: any[]) {
      try {
        if (typeof path === "string") {
          console.log(`REGISTER ${method.toUpperCase()} ${path}`);
        } else if (path && path.route && path.route.path) {
          console.log(
            `REGISTER ${method.toUpperCase()} route object ${path.route.path}`,
          );
        } else {
          try {
            const repr =
              typeof path === "function"
                ? path.name || path.toString().slice(0, 100)
                : JSON.stringify(path).slice(0, 200);
            console.log(
              `REGISTER ${method.toUpperCase()} with non-string first arg: ${repr}`,
            );
          } catch (errInner) {
            console.log(
              `REGISTER ${method.toUpperCase()} with non-string first arg of type ${typeof path}`,
            );
          }
        }
      } catch (err) {
        console.error("route logging failed", err);
      }
      return orig.call(this, path, ...args);
    };
  });
} catch (err) {
  console.error("Failed to instrument route logging", err);
}

import openaiRoute from "./routes/openai";
import envRoute from "./routes/env";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // OpenAI proxy route (server-side) to avoid exposing API keys and CORS issues
  app.use(openaiRoute);

  // Environment check route (safe: does not expose the actual key)
  app.use(envRoute);

  return app;
}
