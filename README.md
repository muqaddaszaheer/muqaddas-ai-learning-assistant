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

The API key should be stored as an environment variable and should never be placed directly in frontend files or committed to GitHub.

For local development, the API key can be stored in a `.env` file.

Example:

```env
ANTHROPIC_API_KEY=your_api_key_here
```

The `.env` file should not be committed to the repository. The `.gitignore` file helps prevent it from being committed accidentally.

For deployment, the API key should be stored securely as an environment variable on the hosting platform.

## Requirements

Before running the project locally, make sure you have:

- **Node.js 18 or newer**
- **An Anthropic API key**
- **An active internet connection**
- **A modern web browser**

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/muqaddaszaheer/muqaddas-ai-learning-assistant.git
```

### 2. Open the Project Folder

```bash
cd muqaddas-ai-learning-assistant
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create the Environment File

Create a file named `.env` in the project root.

You can use `.env.example` as a guide.

Add your API key:

```env
ANTHROPIC_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual API key.

**Never share your API key or commit the `.env` file to GitHub.**

### 5. Start the Server

```bash
npm start
```

### 6. Open the Application

Open the following address in your browser:

```text
http://localhost:3000
```

The **Muqaddas AI Learning Assistant** should then be available in your browser.

## Troubleshooting

If the application does not respond, check the following:

1. Make sure Node.js is installed.
2. Make sure you ran `npm install`.
3. Make sure the `.env` file exists in the project root.
4. Make sure the API key is correct and active.
5. Make sure the server is running with `npm start`.
6. Make sure you are opening `http://localhost:3000`.
7. Make sure your internet connection is working.

## Limitations

The current version has some limitations:

- Conversations are not stored in a database.
- Conversation history is maintained only during the current browser session.
- The application requires the backend server to be available.
- AI responses depend on the availability of the Anthropic API.
- A valid API key is required for AI responses.
- User questions and conversations are not permanently stored.

## Future Improvements

Possible future improvements include:

- User accounts and authentication
- Persistent conversation history
- Database integration
- Personalized learning progress
- Quizzes and automatic scoring
- Progress tracking
- Voice-based interaction
- Improved mobile experience
- Additional AI learning features

These are possible future improvements and are not part of the current version unless implemented separately.

## Capstone Explanation

> "Muqaddas AI Learning Assistant is a beginner-friendly AI tutor for Artificial Intelligence, Machine Learning, Python, and programming. The user interacts with the frontend, which communicates with my Node.js backend. The backend communicates with the Anthropic API and sends the AI response back to the user. I keep the API key on the backend using environment variables instead of exposing it in the frontend."

## Author

**Muqaddas Zaheer Ahmad**

BS Artificial Intelligence Student

Built as part of the **FlyRank AI Fluency Capstone**.
