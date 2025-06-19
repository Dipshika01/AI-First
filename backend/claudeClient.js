// to handle the api calls to claude
// backend/claudeClient.js
const axios = require('axios');
require('dotenv').config();

const CLAUDE_API_URL = "https://api.anthropic.com/v1/messages";
const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;

async function generateCRUDCode(promptText) {
  try {
    const response = await axios.post(
      CLAUDE_API_URL,
      {
        model: "claude-3-opus-20240229", // Or use "claude-3-sonnet" for faster responses
        max_tokens: 2000,
        temperature: 0.3,
        messages: [
          {
            role: "user",
            content: `You are a fullstack developer. Based on this prompt, generate:
1. A MongoDB schema (in Mongoose)
2. Express.js CRUD routes for that schema
3. A React component using Tailwind to add/view/delete items

Prompt: ${promptText}`
          }
        ]
      },
      {
        headers: {
          "x-api-key": CLAUDE_API_KEY,
          "anthropic-version": "2023-06-01",
          "Content-Type": "application/json"
        }
      }
    );

    return response.data?.content?.[0]?.text || 'No response from Claude.';
  } catch (error) {
    console.error("Claude API error:", error.response?.data || error.message);
    return "Error generating code.";
  }
}

module.exports = { generateCRUDCode };
