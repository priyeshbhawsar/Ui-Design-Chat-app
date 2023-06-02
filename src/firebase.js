
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAMIuhacAPR695ypP5duIdvSvP_IwCu75E",
  authDomain: "chat-992a0.firebaseapp.com",
  projectId: "chat-992a0",
  storageBucket: "chat-992a0.appspot.com",
  messagingSenderId: "775713099786",
  appId: "1:775713099786:web:66d5c043e0d61d2bff0ff3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const storage = getStorage();
export const dp=getFirestore()