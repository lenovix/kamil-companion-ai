from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import json
import os

CHAT_HISTORY_FILE = "chat_history.json"

app = FastAPI()

# Load chat history from file
def load_chat_history():
    if os.path.exists(CHAT_HISTORY_FILE):
        with open(CHAT_HISTORY_FILE, "r") as f:
            return json.load(f)
    return []

# Save chat history to file
def save_chat_history(history):
    with open(CHAT_HISTORY_FILE, "w") as f:
        json.dump(history, f, indent=2)

# Memory konteks
chat_memory = load_chat_history()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
def chat(request: ChatRequest):
    user_msg = request.message

    # Simpan pesan user ke memory
    chat_memory.append({"role": "user", "content": user_msg})

    # Ambil beberapa konteks terakhir (misal max 10)
    context = chat_memory[-10:] if len(chat_memory) > 10 else chat_memory

    # Tambahkan system prompt di awal
    system_prompt = {"role": "system", "content": "You are a helpful and friendly AI assistant who always responds in English."}
    full_context = [system_prompt] + context

    # Kirim ke Ollama
    response = requests.post(
        "http://localhost:11434/api/chat",
        json={
            "model": "mistral",
            "messages": full_context,
            "stream": False,
        }
    )
    data = response.json()
    ai_msg = data['message']['content']

    # Simpan respon ke memory
    chat_memory.append({"role": "assistant", "content": ai_msg})
    save_chat_history(chat_memory)

    return {"response": ai_msg}

@app.post("/reset")
def reset_memory():
    global chat_memory
    chat_memory = []
    if os.path.exists(CHAT_HISTORY_FILE):
        os.remove(CHAT_HISTORY_FILE)
    return {"status": "Memory cleared"}
