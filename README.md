# 📬 Feedback Collector App

A simple, responsive feedback collection app built with **React** and **Firebase**, designed to collect user feedback with real-time submission and timestamp display.

---

## 📁 Project Structure

├── public/ # Static assets and public files 
├── src/ 
   │ ├── firebase.js # Firebase configuration and Firestore setup │ 
   ├── App.jsx # Main application component │
   ├── index.css # Tailwind and custom styles │ 
   └── main.jsx # React DOM rendering 
├── .gitignore 
├── package.json 
├── postcss.config.js
├── tailwind.config.js 
└── vite.config.js


---

## ⚙️ Tech Stack

### Frontend
- **React.js** – Component-based UI
- **Tailwind CSS** – Utility-first styling
- **React Toastify** – Elegant toast notifications

### Backend
- **Firebase Firestore** – Real-time NoSQL database to store feedback
- **Firebase SDK** – Integration with Firebase services

### Hosting
- **Netlify** – Free and fast static deployment

---

## 🚀 Features

- ✅ Collects name, email, and message
- 🕒 Adds a timestamp to each feedback entry
- 🌓 Light & Dark mode toggle
- 🔄 Real-time data fetch on button click
- 🔔 User-friendly toast alerts
- 📱 Fully responsive design

---

## 🔧 Setup Instructions

1. Clone the Repository
git clone https://github.com/your-username/feedback-app.git
cd feedback-app

2. Install Dependencies
npm install

3. Firebase Setup
Go to Firebase Console

Create a new project

Enable Firestore Database

Create a file: src/firebase.js

4. Start Development Server
npm run dev or npm start

🌐 Deployment
Deploying to Netlify
Push your code to GitHub

Go to Netlify and sign in

Click "Add New Site" > "Import from Git"

Connect your GitHub repository

Set build command: npm run build

Set publish directory: dist/

Click Deploy

✅ After deployment, you’ll get a live site URL.

✍️ Author
Manas Maheshwari
📧 manasmaheshwaricode@gmail.com
🌐 Portfolio (manasmaheshwari.vercel.app)

