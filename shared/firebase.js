import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBRFgo0x987Yf0xDCewnUHCsGq22P7JnOU",
    authDomain: "friendify2-electricboogaloo.firebaseapp.com",
    databaseURL: "https://friendify2-electricboogaloo.firebaseio.com",
    projectId: "friendify2-electricboogaloo",
    storageBucket: "friendify2-electricboogaloo.appspot.com",
    messagingSenderId: "290961903103",
    appId: "1:290961903103:web:b2cf0ad8c4bc66540aebca",
    measurementId: "G-7LSKZ6B9EH"
};

firebase.initializeApp(firebaseConfig);

export default firebase;