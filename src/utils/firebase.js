// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTi5Nsn59Tj62ffJZZW3oAss3B-R5uAg0",
  authDomain: "netflix-gpt-84de0.firebaseapp.com",
  projectId: "netflix-gpt-84de0",
  storageBucket: "netflix-gpt-84de0.firebasestorage.app",
  messagingSenderId: "170677462045",
  appId: "1:170677462045:web:39c5673c983f3733f1d2f4",
  measurementId: "G-RQZB77H55S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);