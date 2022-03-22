import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCJqxlt5B6TfCV9YLqOkC-nlHx-iUfvCzQ",
  authDomain: "snapchat-clone-d7dbe.firebaseapp.com",
  projectId: "snapchat-clone-d7dbe",
  storageBucket: "snapchat-clone-d7dbe.appspot.com",
  messagingSenderId: "441980669048",
  appId: "1:441980669048:web:bb98fce5740f97d1de318d",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider, storage };
