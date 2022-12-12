// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSW-Fs-wjJy3K7rLIDJ8yKx2qY7OpT8dY",
  authDomain: "demofire-860e0.firebaseapp.com",
  projectId: "demofire-860e0",
  storageBucket: "demofire-860e0.appspot.com",
  messagingSenderId: "877106444902",
  appId: "1:877106444902:web:50b94713b93952bc940ba7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
