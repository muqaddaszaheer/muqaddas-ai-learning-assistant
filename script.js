const messagesEl = document.getElementById("messages");
const welcomeEl = document.getElementById("welcome");
const form = document.getElementById("composerForm");
const inputEl = document.getElementById("input");
const sendBtn = document.getElementById("sendBtn");
const statusBadge = document.getElementById("statusBadge");

// Conversation history is kept here so the assistant remembers context
// within this session. It resets on page reload.
let history = [];

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Very light formatting so ```code blocks``` and `inline code` look readable
function formatBubble(text) {
  let escaped = escapeHtml(text);
  escaped = escaped.replace(/```([\s\S]*?)```/g, (m, code) => `<pre>${code.trim()}</pre>`);
  escaped = escaped.replace(/`([^`]+)`/g, "<code>$1</code>");
  return escaped;
}

function hideWelcome() {
  if (welcomeEl) welcomeEl.style.display = "none";
}

function addMessage(role, text) {
  hideWelcome();
  const wrap = document.createElement("div");
  wrap.className = "msg " + (role === "user" ? "user" : role === "error" ? "error bot" : "bot");

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = role === "user" ? "You" : "M";

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = formatBubble(text);

  wrap.appendChild(avatar);
  wrap.appendChild(bubble);
  messagesEl.appendChild(wrap);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return bubble;
}

function addTyping() {
  hideWelcome();
  const wrap = document.createElement("div");
  wrap.className = "msg bot";
  wrap.id = "typingMsg";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = "M";

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = '<div class="typing"><span></span><span></span><span></span></div>';

  wrap.appendChild(avatar);
  wrap.appendChild(bubble);
  messagesEl.appendChild(wrap);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function removeTyping() {
  const el = document.getElementById("typingMsg");
  if (el) el.remove();
}

function autoResize() {
  inputEl.style.height = "auto";
  inputEl.style.height = Math.min(inputEl.scrollHeight, 120) + "px";
}
inputEl.addEventListener("input", autoResize);

async function sendMessage(rawText) {
  const text = (rawText !== undefined ? rawText : inputEl.value).trim();

  // Handle empty input gracefully instead of sending a blank request
  if (!text) {
    inputEl.focus();
    return;
  }

  addMessage("user", text);
  history.push({ role: "user", content: text });

  inputEl.value = "";
  autoResize();
  sendBtn.disabled = true;
  addTyping();

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history })
    });

    let data;
    try {
      data = await response.json();
    } catch (parseErr) {
      throw new Error("The server sent back something unexpected.");
    }

    removeTyping();

    if (!response.ok) {
      const message = (data && data.error) || "Something went wrong. Please try again.";
      addMessage("error", message);
      // Remove the last user message from history since it wasn't answered,
      // so the conversation stays consistent if they try again.
      history.pop();
      return;
    }

    addMessage("bot", data.reply);
    history.push({ role: "assistant", content: data.reply });
  } catch (err) {
    removeTyping();
    console.error("Muqaddas AI error:", err);
    addMessage(
      "error",
      "I couldn't reach the server. Please check that the server is running and your internet connection is working, then try again."
    );
    history.pop();
  } finally {
    sendBtn.disabled = false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
});

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

document.querySelectorAll(".example-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    sendMessage(chip.dataset.prompt);
  });
});

// Check the server is reachable and configured correctly on load
async function checkStatus() {
  try {
    const res = await fetch("/api/health");
    const data = await res.json();
    if (data.status === "ok" && data.hasApiKey) {
      statusBadge.textContent = "Ready";
      statusBadge.className = "badge online";
    } else {
      statusBadge.textContent = "API key missing";
      statusBadge.className = "badge offline";
    }
  } catch (err) {
    statusBadge.textContent = "Server offline";
    statusBadge.className = "badge offline";
  }
}
checkStatus();
