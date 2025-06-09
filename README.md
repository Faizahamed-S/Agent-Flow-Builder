# Agent Flow Builder

An interactive **Agent Flow Builder** and backend system inspired by **Vector Shift** — allowing users to visually design **agentic AI pipelines** and validate them as **Directed Acyclic Graphs (DAGs)**.

Built with **React + ReactFlow** on the frontend, and **FastAPI** on the backend.

---

## ✨ Features

- 🎨 **Drag-and-drop canvas** using ReactFlow
- 🔗 **Connect nodes** to create custom data/AI flows
- ✅ **Backend validation** to ensure the graph is a valid DAG
- ⚡ **Fast & responsive UI**
- 🐍 **FastAPI backend** with clean API for DAG checking

---

## 🏗️ Tech Stack

### Frontend
- **React**
- **ReactFlow**
- **JavaScript (ES6+)**
- **Tailwind**

### Backend
- **Python**
- **FastAPI**

---

## 📁 Project Structure
```
project-root
├── backend/        # FastAPI backend
│   ├── main.py
│   └── readme.md
└── frontend/       # React + ReactFlow frontend
├── src/
├── public/
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/Faizahamed-S/Agent-Flow-Builder.git
```

### 2️⃣ Run Frontend
```
cd frontend
npm install
npm run start   # or npm run dev if using Vite
```

### 3️⃣ Run Backend
```
cd backend
# create virtualenv if you want
pip install -r requirements.txt  # or manually install fastapi + uvicorn
uvicorn main:app --reload
```

---

## Screenshots

---

## Possibie Future Improvements
- 💾 Save/load flows (to database)
- 🎯 Execute the flow with actual AI models 
- 🌐 Integrate with LangChain / LlamaIndex
- 🔐 User authentication & authZ
- 📈 Add metrics & observability dashboards
