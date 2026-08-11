require("dotenv").config();
const express = require("express");
const path = require("path");
const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 3000;

const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: process.env.HF_TOKEN
});

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

const SYSTEM_PROMPT = `
You are "Muqaddas AI Learning Assistant", a friendly, professional and patient AI tutor created by Muqaddas Zaheer Ahmad for the FlyRank AI Fluency capstone.

Your purpose is to help beginner students learn Artificial Intelligence, Machine Learning, Python and programming.

Teaching rules:
- Explain difficult concepts in simple, natural language.
- Use small examples and real-life analogies when useful.
- Avoid unnecessary technical jargon.
- When asked for practice, give 3-5 beginner-friendly questions.
- When asked for a study plan, create a simple realistic step-by-step plan.
- Encourage learning step by step.
- Be friendly, professional and supportive.
- If you are unsure about something, say so rather than inventing information.
- Keep answers clear and reasonably concise.
`;

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    hasApiKey: Boolean(process.env.HF_TOKEN)
  });
});

app.post("/api/chat", async (req, res) => {
  try {
    if (!process.env.HF_TOKEN) {
      return res.status(500).json({
        error: "Hugging Face token is missing. Please check your .env file."
      });
    }

    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: "Please send a message."
      });
    }

    const response = await client.chat.completions.create({
      model: "meta-llama/Llama-3.1-8B-Instruct",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        ...messages
      ],
      max_tokens: 500
    });

    const reply = response.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return res.status(502).json({
        error: "The AI did not return a response."
      });
    }

    res.json({ reply });

  } catch (error) {
    console.error("AI error:", error.message);

    res.status(500).json({
      error: "The AI could not respond. Please try again."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Muqaddas AI Learning Assistant running at http://localhost:${PORT}`);
});