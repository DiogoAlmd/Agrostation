// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbBsPB_BywnR_LRtfM5hBSFtnptUTwYTo",
    authDomain: "agrostation-1d0a2.firebaseapp.com",
    projectId: "agrostation-1d0a2",
    storageBucket: "agrostation-1d0a2.appspot.com",
    messagingSenderId: "459002579527",
    appId: "1:459002579527:web:6ea0ca7c7d5851805f3f62"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {persistence: getReactNativePersistence(AsyncStorage)});
const db = getFirestore(app);

export {auth, db};