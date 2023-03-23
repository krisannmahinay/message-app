import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_LtdOEB9MR2iB7VeiVU46ie21qdo2kJM",
  authDomain: "message-app-41ea4.firebaseapp.com",
  projectId: "message-app-41ea4",
  storageBucket: "message-app-41ea4.appspot.com",
  messagingSenderId: "1069955832277",
  appId: "1:1069955832277:web:af8faf4cd1d8e346e4c55c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
