import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// (Optional) Import for Authentication
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC49qdbhsXm5m6Y8whiS5MFyuyUJfuSX7w",
  authDomain: "music-player-25bdb.firebaseapp.com",
  projectId: "music-player-25bdb",
  storageBucket: "music-player-25bdb.appspot.com",
  messagingSenderId: "160200136042",
  appId: "1:160200136042:web:4b7dab2cc311bbf359c113"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app); // (Optional)
// Create a storage reference from our storage service
const storageRef = ref(storage);

export { storage, db, auth, storageRef };
