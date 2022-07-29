import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyACYJ5Cm2Y-i7HJes2ET2QW67zvIgLrZeo",
    authDomain: "tutorial-e06c1.firebaseapp.com",
    projectId: "tutorial-e06c1",
    storageBucket: "tutorial-e06c1.appspot.com",
    messagingSenderId: "863505404334",
    appId: "1:863505404334:web:132118b0d6acd7dfa3f83f",
    measurementId: "G-SW2M0FYQG5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export default database;