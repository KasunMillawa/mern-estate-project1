// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "estate-project-02.firebaseapp.com",
  projectId: "estate-project-02",
  storageBucket: "estate-project-02.appspot.com",
  messagingSenderId: "118205684768",
  appId: "1:118205684768:web:0278eee4f32e94b8e5b045"
};

// Initialize Firebase
export const app  = initializeApp(firebaseConfig);