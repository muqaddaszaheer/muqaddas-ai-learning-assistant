# Muqaddas AI Learning Assistant

A beginner-friendly AI learning assistant for **Artificial Intelligence, Machine Learning, Python, and programming**.

Built by **Muqaddas Zaheer Ahmad** as part of the **FlyRank AI Fluency Capstone**.

## How It Works

The project uses a simple client-server architecture:

```text
Browser (public/)
       |
       v
Your Server (server.js)
       |
       v
Anthropic API
```

The browser displays the learning assistant and sends questions to the project's own server. The server securely communicates with the Anthropic API and sends the AI response back to the browser.

The API key is kept on the server and stored in a local `.env` file. It is **not placed inside the frontend files**.

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

### Main Files

* `server.js` — Backend server that handles requests and communicates with the Anthropic API
* `public/index.html` — Main webpage structure and content
* `public/style.css` — Styling and responsive layout for the learning assistant
* `public/script.js` — Frontend JavaScript that handles user interaction and communication with the server
* `package.json` — Project information, dependencies, and start script
* `.env.example` — Example file showing the required environment variable
* `.gitignore` — Helps prevent sensitive and unnecessary files, such as `.env` and `node_modules`, from being committed
* `README.md` — Project documentation

## Features

The AI Learning Assistant can:

* Explain Artificial Intelligence concepts in simple language
* Explain Machine Learning concepts for beginners
* Help with Python and programming
* Provide small and easy-to-understand examples
* Create beginner-friendly practice questions
* Create simple study plans
* Answer questions step by step
* Maintain the conversation during the current browser session
* Handle empty messages and common connection errors

## Security

The project keeps the Anthropic API key on the backend instead of exposing it in the frontend.

The frontend communicates with the project's server, and the server communicates with the Anthropic API.

The real API key should be stored in a local `.env` file and should **never be committed to GitHub or shared publicly**.

The `.gitignore` file helps prevent the `.env` file and other unnecessary files from being committed accidentally.

## Requirements

Before running the project, make sure you have:

* **Node.js 18 or newer**
* **An Anthropic API key**
* **An active internet connection**

## Setup

### 1. Install Node.js

Install **Node.js 18 or a newer version** if it is not already installed on your computer.

### 2. Install Dependencies

Open a terminal in the project folder and run:

```bash
npm install
```

This installs the dependencies required by the project.

### 3. Create the Environment File

Create a file named `.env` in the root project folder.

You can use `.env.example` as a guide.

Add your Anthropic API key in this format:

```env
ANTHROPIC_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual API key.

**Never share your API key or commit the `.env` file to GitHub.**

### 4. Start the Server

Run:

```bash
npm start
```

If everything is configured correctly, the server will start locally.

### 5. Open the Application

Open the following address in your browser:

```text
http://localhost:3000
```

The **Muqaddas AI Learning Assistant** should then open in your browser.

## If Something Goes Wrong

If the application does not respond, check the following:

1. Make sure Node.js is installed
2. Make sure you ran `npm install`
3. Make sure the `.env` file exists in the project root
4. Make sure the Anthropic API key is correct and active
5. Make sure the server is running with `npm start`
6. Make sure you are opening `http://localhost:3000`
7. Make sure your computer has an active internet connection

## What the Assistant Does Not Do

* It does not store conversations in a database
* Conversation history is kept only during the current browser session
* It cannot respond if the backend server is offline
* It cannot access the Anthropic API if the API key is missing, invalid, or unavailable
* It does not permanently save users' questions or conversations

## Capstone Explanation

If I need to explain the project during my capstone review, I can say:

> "Muqaddas AI Learning Assistant is a beginner-friendly AI tutor for Artificial Intelligence, Machine Learning, Python, and programming. The browser communicates with my Node.js server, and my server communicates with the Anthropic API. I keep the API key on the server inside a `.env` file instead of putting it in the frontend. This keeps the API key out of the frontend while allowing the application to provide AI-powered learning support."

## Author

**Muqaddas Zaheer Ahmad**

BS Artificial Intelligence Student

Built as part of the **FlyRank AI Fluency Capstone**
