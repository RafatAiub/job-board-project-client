# 🧑‍💼 Job Board — Frontend (React.js)

This is the frontend of the **Job Board Project**, built using **React.js** with **Tailwind CSS** and structured in a modern, maintainable way.

## 🔗 Live URL

To be added after deployment (e.g. on Vercel)

## 🛠️ Tech Stack

* React.js (v18+)
* Tailwind CSS
* React Router DOM
* Axios

## 📂 Folder Structure

```
src/
├── components/          # Navbar, etc
├── pages/               # All main pages (Home, Details, Apply, Admin)
├── routes/              # ProtectedRoute
├── services/            # API configuration
└── App.jsx              # Main app with routing
```

## 🚀 Features

* ✅ View all job listings
* ✅ View detailed job description
* ✅ Apply for a job (Name, Email, cv Link)
* ✅ Admin login
* ✅ Admin can add new jobs
* ✅ Protected route for admin only

## 🧪 How to Run Locally

```bash
# 1. Clone the project
$ git clone https://github.com/your-username/job-board-frontend.git
$ cd job-board-frontend

# 2. Install dependencies
$ npm install

# 3. Create .env file
VITE_API_URL=http://localhost:5000/api

# 4. Start the dev server
$ npm run dev
```

## 🔐 Admin Auth (Only 1 Admin)

* Admin logs in using email + password (from backend `.env`)
* Receives a JWT token and stores it in `localStorage`
* Token is sent with `Authorization` header to create new jobs

## ✅ Environment Variables

Create a `.env` file in the root with:

```
VITE_API_URL=http://localhost:5000/api
```

## 📦 Deployment

* ✅ Host on **Vercel** for frontend
* ✅ Use backend live API (e.g. on Railway)

## 📘 Important Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

## 🙏 Acknowledgement

Built with ❤️ to showcase frontend skills with clean code, proper routing, secure admin logic, and responsive design.

