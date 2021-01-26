import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "slack-clone-5564d.firebaseapp.com",
  databaseURL: "https://slack-clone-5564d-default-rtdb.firebaseio.com",
  projectId: "slack-clone-5564d",
  storageBucket: "slack-clone-5564d.appspot.com",
  messagingSenderId: "851965069854",
  appId: "1:851965069854:web:0b94abc659c38d8ccdbc0f",
  measurementId: "G-5BRH9CBQQT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
