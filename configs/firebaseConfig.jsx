// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "shelterpaws-65d62.firebaseapp.com",
    projectId: "shelterpaws-65d62",
    storageBucket: "shelterpaws-65d62.appspot.com",
    messagingSenderId: "750638292829",
    appId: "1:750638292829:web:b603992c14d79f820c12b4",
    measurementId: "G-WJ7GR5J0LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)