import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnZeQ4wgxOjo6K8ROBpgd2ksanjJzAoD4",
  authDomain: "my-money-7b89f.firebaseapp.com",
  projectId: "my-money-7b89f",
  storageBucket: "my-money-7b89f.appspot.com",
  messagingSenderId: "32021509318",
  appId: "1:32021509318:web:d8906741667f34ae7fd3c7",
};

// init firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
