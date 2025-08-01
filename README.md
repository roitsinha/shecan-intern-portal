---

# 🎯 SheCan Intern Portal — Full Stack Developer Internship (Round 1 Task)

Thank you for the opportunity to apply for the **Full Stack Developer Internship** at SheCan!

---

## 📌 Project Overview

This is a **basic fundraising intern portal** built using **React (frontend)** and **Express.js (backend)**. It fulfills the requirements of **Round 1**, showcasing essential full-stack skills with a focus on simplicity and clarity.

> ⚠️ **Note:** This is a **work-in-progress** prototype. Features and UI/UX will continue to improve in upcoming development phases.

---

## 🚀 Features Implemented

### 🖥️ Frontend (React)

* Dummy **Login** and **Signup** pages *(no real authentication)*
* **Dashboard** displaying:

  * Intern's name
  * Dummy referral code (e.g., `rohitsinha2025`)
  * Total donations raised (fetched from backend)
  * Static **rewards** / **unlockables** section
* **Leaderboard** page displaying dummy data from backend

### 🌐 Backend (Express.js)

* RESTful API endpoints serving:

  * Dummy intern data
  * Dummy leaderboard data
* CORS enabled for frontend access

---

## 🛠️ Tech Stack

| Layer    | Tech Used                   |
| -------- | --------------------------- |
| Frontend | React (Vite), React Router  |
| Backend  | Node.js, Express.js         |
| Styling  | Plain CSS (no UI framework) |

---

## ⚙️ Running the Project Locally

> Make sure **Node.js** and **npm** are installed on your machine.

### 🔧 1. Start the Backend Server

```bash
cd backend
npm install
node server.js
```

* The backend server will run at:
  🌐 **[http://localhost:5000](http://localhost:5000)**

* Access dummy intern data at:
  🔗 **[http://localhost:5000/api/intern](http://localhost:5000/api/intern)**

---

### ⚛️ 2. Start the Frontend Development Server

In a new terminal window:

```bash
cd frontend
npm install
npm run dev
```

* The frontend will be accessible at:
  🌐 **[http://localhost:5173](http://localhost:5173)**

---

## 📂 Folder Structure (Simplified)

```
project-root/
├── backend/
│   ├── server.js
│   └── (API logic)
└── frontend/
    ├── src/
    │   ├── components/
    │   └── pages/
    └── (React setup)
```

---

## 🙌 Final Note

This is just the beginning! I’m excited to grow through this opportunity and look forward to improving and expanding this project in future rounds.

---
