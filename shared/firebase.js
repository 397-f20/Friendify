import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRMqSdi86OmuTb1svijabx6-UeHsJAabc",
    authDomain: "friendify-40f24.firebaseapp.com",
    databaseURL: "https://friendify-40f24.firebaseio.com",
    projectId: "friendify-40f24",
    storageBucket: "friendify-40f24.appspot.com",
    messagingSenderId: "571390882930",
    appId: "1:571390882930:web:b9667175ee928f4d6f7eeb"
};

firebase.initializeApp(firebaseConfig);

export default firebase;