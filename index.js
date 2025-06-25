import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/chat", async (req, res) => {
  const apiKey = process.env.OPENAI_API_KEY;
  const orgId = process.env.OPENAI_ORG_ID;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "OpenAI-Organization": orgId
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.json(data);
});

app.listen(3000);
