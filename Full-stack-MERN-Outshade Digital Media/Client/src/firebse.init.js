// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyA4CZUr2a1MC-d08sMBqK7zQnAagkQq-54',
    authDomain: 'outshade-digital-media-jt.firebaseapp.com',
    projectId: 'outshade-digital-media-jt',
    storageBucket: 'outshade-digital-media-jt.appspot.com',
    messagingSenderId: '419128219750',
    appId: '1:419128219750:web:bc3fc1071898d5286775a7',
    measurementId: 'G-JBE26BS979',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;