# Muqaddas AI Learning Assistant

A beginner-friendly AI tutor for Artificial Intelligence, Machine Learning, Python, and programming.
Built by **Muqaddas Zaheer Ahmad** for the **FlyRank AI Fluency capstone**.

---

## How it works (architecture)

This project has two parts, kept deliberately separate for safety:

```
Browser (public/)  --->  Your server (server.js)  --->  Anthropic API
   no secrets              holds the API key             the AI model
```

1. **Frontend** (`public/index.html`, `style.css`, `script.js`) — the chat page a
   student sees. It only ever talks to your own server, at `/api/chat`.
2. **Backend** (`server.js`) — a small Node.js/Express server that you run. It is
   the *only* place the real Anthropic API key lives, and it reads that key from
   a `.env` file that is never sent to the browser and never committed to Git
   (see `.gitignore`).
3. **Anthropic API** — the actual Claude model. Only the backend ever contacts it.

Why this matters: if the API key were written directly into the HTML/JS, anyone
could open the browser's developer tools, copy the key, and use it (and rack up
charges) on your account. Keeping the key on the server means the key never
reaches the browser at all.

---

## Project structure

```
muqaddas-ai-capstone/
├── server.js           # Backend server (holds the API key, calls Anthropic)
├── package.json         # Project dependencies
├── .env.example          # Template for your environment variables
├── .gitignore             # Keeps .env and node_modules out of Git
├── public/
│   ├── index.html          # Chat page markup
│   ├── style.css            # Styling (clean, responsive)
│   └── script.js              # Frontend logic (talks to /api/chat only)
└── README.md
```

---

## Setup (run it yourself)

**1. Install Node.js** (version 18 or newer) if you don't already have it:
https://nodejs.org

**2. Install dependencies:**
```bash
npm install
```

**3. Add your API key:**
```bash
cp .env.example .env
```
Then open `.env` and paste in your real Anthropic API key from
https://console.anthropic.com — get an account and generate a key there if you
don't have one yet.

**4. Start the server:**
```bash
npm start
```

**5. Open the app:**
Go to `http://localhost:3000` in your browser.

If the key is missing or wrong, the status badge in the top-right of the page
will say "API key missing" or "Server offline" instead of "Ready" — the app
tells you what's wrong instead of failing silently.

---

## What the assistant can do

- Explain AI, ML, Python, and programming concepts in simple, plain language
- Give small examples (code snippets or real-life analogies) when helpful
- Generate 3-5 beginner practice questions on request
- Build simple, realistic study plans (day-by-day or week-by-week)
- Remember the conversation so far, within a single browser session
- Handle empty messages and connection/server errors without crashing

## What it does not do

- It does not store your conversation anywhere — history lives only in the
  browser tab and disappears on refresh.
- It does not fabricate features it doesn't have; if something goes wrong
  (server down, missing key, network issue), it tells you plainly what
  happened instead of pretending to work.

---

## For your capstone review

If asked to explain the project simply:

> "The browser only ever talks to my own small server. My server is the only
> place that holds the real API key, read from a `.env` file. My server adds
> the key, calls Anthropic's API, and sends back just the answer. The key
> never touches the browser, so it can't be stolen from the page's source
> code."

That's the entire security model in one paragraph — simple enough to say out
loud, and it's the same pattern real production apps use.
