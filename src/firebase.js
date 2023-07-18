
// error resolve  import as following
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpvUH-Iun3IiyWJwOPdz6oDzrJyfhrm4Y",
    authDomain: "envoycan-c1678.firebaseapp.com",
    projectId: "envoycan-c1678",
    storageBucket: "envoycan-c1678.appspot.com",
    messagingSenderId: "294435834207",
    appId: "1:294435834207:web:7b197568685758ca360eea",
    measurementId: "G-KHZ4TWJXEE"
};
//we need to initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialize database
const db = firebaseApp.firestore();
//to handle all the signin etc
const auth = firebase.auth();
export { db, auth };
