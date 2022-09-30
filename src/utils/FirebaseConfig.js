// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsYVvUe6VZXlEqI-wgQPBNM8wYGfgEHc0",
  authDomain: "react-ecommerce-coderhou-9128f.firebaseapp.com",
  projectId: "react-ecommerce-coderhou-9128f",
  storageBucket: "react-ecommerce-coderhou-9128f.appspot.com",
  messagingSenderId: "163225752197",
  appId: "1:163225752197:web:37224e54d464ee999dcfec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
