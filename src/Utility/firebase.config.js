// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXzlBHpXyfehQy4uoiolTWQRRV_WsIZDo",
  authDomain: "noknok-bf4f8.firebaseapp.com",
  projectId: "noknok-bf4f8",
  storageBucket: "noknok-bf4f8.appspot.com",
  messagingSenderId: "215967427927",
  appId: "1:215967427927:web:0c7c10d70861ad6a99a212",
  measurementId: "G-7WV5RXVQC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
