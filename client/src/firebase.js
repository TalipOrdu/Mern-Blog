// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-blog-ec321.firebaseapp.com",
  projectId: "mern-blog-ec321",
  storageBucket: "mern-blog-ec321.appspot.com",
  messagingSenderId: "344576910064",
  appId: "1:344576910064:web:701734f07bce572ece5835"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);