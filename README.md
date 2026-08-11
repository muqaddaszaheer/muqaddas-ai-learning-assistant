# Muqaddas AI Learning Assistant

A beginner-friendly AI learning assistant for **Artificial Intelligence, Machine Learning, Python, and programming**.

Built by **Muqaddas Zaheer Ahmad** as part of the **FlyRank AI Fluency Capstone**.

## Live Demo

[Open Muqaddas AI Learning Assistant](https://muqaddas-ai-learning-assistant-production.up.railway.app/)

## GitHub Repository

[View the source code on GitHub](https://github.com/muqaddaszaheer/muqaddas-ai-learning-assistant)

## About the Project

Muqaddas AI Learning Assistant is a personal AI tutor designed to help beginners understand technical topics in a simple and easy-to-follow way.

The assistant can explain concepts, provide examples, create practice questions, and help learners create study plans.

The main goal of the project is to make learning AI and programming more approachable for beginners.

## How It Works

The project uses a simple client-server architecture:

```text
User
  |
  v
Browser (Frontend)
  |
  v
Node.js Server (Backend)
  |
  v
Anthropic API
  |
  v
AI Response
  |
  v
Browser
```

The user enters a question through the browser. The frontend sends the request to the Node.js server. The server communicates with the Anthropic API and sends the AI-generated response back to the browser.

The API key is handled on the backend instead of being placed in the frontend files.

## Project Structure

```text
muqaddas-ai-learning-assistant/
├── server.js
├── package.json
├── package-lock.json
├── .env.example
├── .gitignore
├── README.md
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

## Main Files

- `server.js` — Backend server that handles requests and communicates with the Anthropic API
- `public/index.html` — Main webpage structure and content
- `public/style.css` — Styling and responsive layout
- `public/script.js` — Frontend JavaScript for user interaction and communication with the server
- `package.json` — Project configuration, dependencies, and start script
- `.env.example` — Example environment variable configuration
- `.gitignore` — Helps prevent sensitive and unnecessary files from being committed
- `README.md` — Project documentation

## Features

The AI Learning Assistant can:

- Explain Artificial Intelligence concepts in simple language
- Explain Machine Learning concepts for beginners
- Help with Python and programming
- Provide simple examples
- Create beginner-friendly practice questions
- Create simple study plans
- Answer questions step by step
- Maintain the conversation during the current browser session
- Handle empty messages and common connection errors

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Anthropic API
- dotenv
- GitHub
- Railway

## Security

The project keeps the Anthropic API key on the backend instead of exposing it in the frontend.

The API key should be stored as an environment variable and should never be
