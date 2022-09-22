import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtwl_alLoDpmYKKJEdgaSHjQRVeIyjygo",
  authDomain: "app-nutrition-844d8.firebaseapp.com",
  projectId: "app-nutrition-844d8",
  storageBucket: "app-nutrition-844d8.appspot.com",
  messagingSenderId: "769330419780",
  appId: "1:769330419780:web:b1bf4cc9b9b0f6ade5c411"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
export default {
    firebase,
    db
}