# Feedback Collector App

A simple and responsive feedback collection app built using **React** and **Firebase**.

## Features

- Collects name, email, and feedback message
- Validates form inputs
- Stores feedback in Firebase Firestore
- Displays all feedback entries with timestamp
- Light and Dark theme toggle
- Toast notifications for user actions

## Live Site

👉 [Click here to view]([https://gentle-halva-ee67b4.netlify.app](https://feedbackfallonstudio.netlify.app/))

## Tech Stack

- React
- Firebase (Firestore)
- Tailwind CSS
- React Toastify
- Netlify (for deployment)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/feedback-app.git
   cd feedback-app
2. Install dependencies:
npm install

3. Create a firebase.js file in src/ and add your Firebase config:
   import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MSG_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

4. Run the development server: npm start or npm run dev

Deployment
Frontend deployed on Netlify

Just push updates to your GitHub repo to trigger automatic redeploy

Author
Manas Maheshwari
---

