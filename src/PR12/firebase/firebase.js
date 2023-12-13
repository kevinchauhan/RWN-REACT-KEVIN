// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGA2PICU0gHkuVL63-pQS8UlxueR-GyB4",
    authDomain: "first-firebase-app-d280f.firebaseapp.com",
    databaseURL: "https://first-firebase-app-d280f-default-rtdb.firebaseio.com",
    projectId: "first-firebase-app-d280f",
    storageBucket: "first-firebase-app-d280f.appspot.com",
    messagingSenderId: "254834977111",
    appId: "1:254834977111:web:dd54870f18367241467612"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);