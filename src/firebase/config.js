import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyA-6STfj-c1AgtmVmBD76yspOzv6htvRxI",
  authDomain: "fir-be642.firebaseapp.com",
  databaseURL: "https://fir-be642-default-rtdb.firebaseio.com",
  projectId: "fir-be642",
  storageBucket: "fir-be642.appspot.com",
  messagingSenderId: "466683655129",
  appId: "1:466683655129:web:bdf624b85563d0618f1fc8",
  measurementId: "G-MZRFXVCE02"
};

 export default firebase.initializeApp(firebaseConfig)