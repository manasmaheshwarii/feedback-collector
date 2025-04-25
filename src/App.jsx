import React, { useState, useEffect } from "react";
import "./index.css";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS
import { format } from "date-fns"; // Import date-fns for date formatting

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedbacks, setFeedbacks] = useState([]);
  const [showFeedbacks, setShowFeedbacks] = useState(false);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Add timestamp to form data
      const feedbackWithTimestamp = {
        ...formData,
        timestamp: serverTimestamp(), // Add Firestore server timestamp
      };

      await addDoc(collection(db, "feedbacks"), feedbackWithTimestamp);
      toast.success("Feedback submitted successfully!"); // Toast on success
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Submission failed. Please try again."); // Toast on error
    }
    setLoading(false);
  };

  const fetchFeedbacks = async () => {
    const snapshot = await getDocs(collection(db, "feedbacks"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setFeedbacks(data);
  };

  useEffect(() => {
    if (showFeedbacks) {
      fetchFeedbacks();
    }
  }, [showFeedbacks]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="glass-card w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-4">Feedback Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Feedback"
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <button
        onClick={() => setShowFeedbacks(!showFeedbacks)}
        className="mt-6 bg-gray-800 text-white px-4 py-2 rounded"
      >
        {showFeedbacks ? "Hide" : "View"} Submitted Feedback
      </button>
      {showFeedbacks && (
        <div className="mt-4 w-full max-w-md space-y-2">
          {feedbacks.map((fb) => (
            <div key={fb.id} className="bg-white p-4 rounded shadow">
              <h2 className="font-semibold">{fb.name}</h2>
              <p className="text-sm text-gray-600">{fb.email}</p>
              <p className="mt-2">{fb.message}</p>
              <p className="text-xs text-gray-500 mt-2">
                {/* Format and display the timestamp */}
                Submitted on:{" "}
                {fb.timestamp
                  ? format(fb.timestamp.toDate(), "MMMM dd, yyyy hh:mm a")
                  : "Loading..."}
              </p>
            </div>
          ))}
        </div>
      )}
      <footer className="mt-10 text-gray-500 text-sm">
        © 2025 Manas | Feedback Collector App
      </footer>
      <ToastContainer /> {/* Toast Notifications Container */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default App;
