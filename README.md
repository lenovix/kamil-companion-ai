# Kamil Companion AI 🧠💬

A local AI companion chatbot built using FastAPI (Python) for the backend and Next.js (React) for the frontend, powered by an LLM model like Mistral running via [Ollama](https://ollama.com/).

---

## 🧩 Project Structure

```
kamil-companion-ai/
├── ai-backend/        # FastAPI backend
├── ai-frontend/       # Next.js frontend
├── .gitignore
└── README.md
```

---

## ⚙️ Requirements

- Python 3.10+
- Node.js 18+
- Ollama (with model installed, e.g. `mistral`)
- Git (optional)
- Virtualenv or other Python environment tool

---

## 📦 Setup & Run

### 1. Clone the Repository

```bash
git clone https://github.com/lenovix/kamil-companion-ai.git
cd kamil-companion-ai
```

---

### 2. 🧠 Backend (FastAPI)

#### Setup Environment

```bash
cd ai-backend
python -m venv .venv
source .venv/bin/activate      # Linux/macOS
# atau
.venv\Scripts\activate         # Windows

pip install -r requirements.txt
```

#### Buat File `.env` (Opsional)

Jika kamu ingin menyimpan konfigurasi kustom:
```bash
touch .env
```

#### Jalankan Backend

```bash
uvicorn main:app --reload --port 8000
```

Backend akan berjalan di: [http://localhost:8000](http://localhost:8000)

---

### 3. 🖥️ Frontend (Next.js)

#### Setup

```bash
cd ../ai-frontend
npm install
```

#### Jalankan Frontend

```bash
npm run dev
```

Frontend akan berjalan di: [http://localhost:3000](http://localhost:3000)

---

### 4. 🤖 Pastikan Ollama Aktif

Install dan jalankan `mistral` di Ollama:

```bash
ollama run mistral
```

Atau preload model:

```bash
ollama pull mistral
```

Backend akan otomatis mengirim prompt ke:
```
http://localhost:11434/api/chat
```

---

## 🧠 Memory & Reset

- Chat history disimpan di file `chat_history.json` pada folder backend.
- Bisa direset melalui tombol **Settings** di frontend, atau hit endpoint:

```http
POST http://localhost:8000/reset
```

---

## 📝 License

MIT © 2025 — [@lenovix](https://github.com/lenovix)
