// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Remove this line ↓ since it's unused and causing build to fail
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe4Lhi1nTSU16wbOH6eG9kvxJshDFIVac",
  authDomain: "feedback-app-1a9e1.firebaseapp.com",
  projectId: "feedback-app-1a9e1",
  storageBucket: "feedback-app-1a9e1.firebasestorage.app",
  messagingSenderId: "773258819177",
  appId: "1:773258819177:web:794e49fa249a5edc6e94f8",
  measurementId: "G-VN6RES09B8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 🔴 Removed analytics because it's not being used
// const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export db to be used in other parts of your app
export { db };
