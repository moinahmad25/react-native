// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8UIQLkKKW-228pdlrhYUbOBoionyflQs",
  authDomain: "ai-travel-planner-e0750.firebaseapp.com",
  projectId: "ai-travel-planner-e0750",
  storageBucket: "ai-travel-planner-e0750.appspot.com",
  messagingSenderId: "887744103797",
  appId: "1:887744103797:web:2b60203113272fc9e33f3c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
