// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA4M2kUJGnws0RGkBKUyt0GmQGdJnqV0Q",
  authDomain: "todoelectronica-ae9ff.firebaseapp.com",
  projectId: "todoelectronica-ae9ff",
  storageBucket: "todoelectronica-ae9ff.appspot.com",
  messagingSenderId: "915355412486",
  appId: "1:915355412486:web:d3c8855e31437b20a07b87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db