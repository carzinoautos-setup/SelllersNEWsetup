import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import openaiRoute from "./routes/openai";
import envRoute from "./routes/env";

export function createServer() {
  const app = express();

  // Instrument route registration to help debug invalid route patterns
  try {
    const proto: any = (express.Router as any).prototype;
    ["get", "post", "use", "all"].forEach((method) => {
      const orig = proto[method];
      proto[method] = function (path: any, ...args: any[]) {
        try {
          if (typeof path === "string") {
            console.log(`REGISTER ${method.toUpperCase()} ${path}`);
          } else if (path && path.route && path.route.path) {
            console.log(`REGISTER ${method.toUpperCase()} route object ${path.route.path}`);
          } else {
            try {
              const repr = typeof path === 'function' ? (path.name || path.toString().slice(0,100)) : JSON.stringify(path).slice(0,200);
              console.log(`REGISTER ${method.toUpperCase()} with non-string first arg: ${repr}`);
            } catch (errInner) {
              console.log(`REGISTER ${method.toUpperCase()} with non-string first arg of type ${typeof path}`);
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
