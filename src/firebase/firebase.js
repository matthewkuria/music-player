import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

import {getDatabase} from 'firebase/database'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC49qdbhsXm5m6Y8whiS5MFyuyUJfuSX7w",
  authDomain: "music-player-25bdb.firebaseapp.com",
  projectId: "music-player-25bdb",
  storageBucket: "music-player-25bdb.appspot.com",
  messagingSenderId: "160200136042",
  appId: "1:160200136042:web:4b7dab2cc311bbf359c113"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const storage = getStorage(app);

// Create a storage reference from our storage service
const storageRef = ref(storage);

// const storage = getStorage(app);



const db = getFirestore(app);
const real=getDatabase(app);


export { auth, storageRef};