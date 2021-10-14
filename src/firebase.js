import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDCn1BUXjcPiWQcrfU9lMPkx5O8lQo2T1c",
  authDomain: "todo-list-709b2.firebaseapp.com",
  projectId: "todo-list-709b2",
  storageBucket: "todo-list-709b2.appspot.com",
  messagingSenderId: "161552117037",
  appId: "1:161552117037:web:88ffefb145d7b64db4f7a4"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app)
