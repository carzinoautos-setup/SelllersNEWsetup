import express from "express";

const router = express.Router();

router.get("/api/env-check", (_req, res) => {
  try {
    const hasKey = !!process.env.OPENAI_API_KEY;
    const key = process.env.OPENAI_API_KEY;
    const masked = key ? `${key.length} chars` : null;
    // Do NOT return the actual key. Only indicate presence and length for debugging.
    res.json({ openai_present: hasKey, openai_key_length: masked });
  } catch (err) {
    res.status(500).json({ error: "env check failed" });
  }
});

export default router;
