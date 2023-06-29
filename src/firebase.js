import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMBiyX75_zA3z7d4goBzlETSSxCdorVJ4",
  authDomain: "sign-in-92727.firebaseapp.com",
  projectId: "sign-in-92727",
  storageBucket: "sign-in-92727.appspot.com",
  messagingSenderId: "74666055650",
  appId: "1:74666055650:web:59303c80be889c09eacbbb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
