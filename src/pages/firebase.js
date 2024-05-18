// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY0ZAobLODbtRAr0k8hXWerYDHpDHMMSY",
  authDomain: "testing-6882c.firebaseapp.com",
  databaseURL: "https://testing-6882c-default-rtdb.firebaseio.com",
  projectId: "testing-6882c",
  storageBucket: "testing-6882c.appspot.com",
  messagingSenderId: "327195113063",
  appId: "1:327195113063:web:0e641b208da9ee088d46c2",
  measurementId: "G-BTY15Y1DP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}