import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// import { firebase } from "firebase/app";
import firebase from 'firebase/compat/app';
import "firebase/auth";

// export const auth = firebase.initializeApp({
    const app = initializeApp({
        apiKey: "AIzaSyBr64lJg3glicfKOdamHNPHPCUgGW0Ys5c",
        authDomain: "unichat-d0d1e.firebaseapp.com",
        projectId: "unichat-d0d1e",
        storageBucket: "unichat-d0d1e.appspot.com",
        messagingSenderId: "317257263688",
        appId: "1:317257263688:web:3b5f6fd56bf71573c5467d"
  });
//   .auth();
    export const auth = getAuth()
    const database = getDatabase();

    export { database }


