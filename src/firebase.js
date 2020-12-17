import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdSXdq1vnhtbCNNaEeuEwj2uqgl6_AFMw",
    authDomain: "react-form-a3241.firebaseapp.com",
    projectId: "react-form-a3241",
    storageBucket: "react-form-a3241.appspot.com",
    messagingSenderId: "230298773889",
    appId: "1:230298773889:web:af3d897aacc78d41fda080",
    measurementId: "G-4MTKK1YLH2"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db;

