import express from "express";

const router = express.Router();

router.post("/api/openai", async (req, res) => {
  try {
    const prompt = req.body?.prompt || req.body?.inputText;
    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt in request body" });
    }

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
      return res
        .status(500)
        .json({ error: "Missing OPENAI_API_KEY on server" });
    }

    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You write concise, SEO-friendly vehicle descriptions.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    const data = await resp.json();

    // Forward status and body from OpenAI to the client
    return res.status(resp.status).json(data);
  } catch (err) {
    console.error("/api/openai error:", err);
    return res.status(500).json({ error: "OpenAI request failed" });
  }
});

export default router;
