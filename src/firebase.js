// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_6QNGTBFHT1Mtb9OY2-s2U6fpzPPC9TM",
    authDomain: "ibos-task-management.firebaseapp.com",
    projectId: "ibos-task-management",
    storageBucket: "ibos-task-management.appspot.com",
    messagingSenderId: "907915065342",
    appId: "1:907915065342:web:0bb5b712ba8af6ec7ab2af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
