import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvOJA68DeXKV_BxrNPQ0YbqLww6kvBtbg",
  authDomain: "eatdotfit-362114.firebaseapp.com",
  projectId: "eatdotfit-362114",
  storageBucket: "eatdotfit-362114.appspot.com",
  messagingSenderId: "1063827659241",
  appId: "1:1063827659241:web:f3c2888f2eac1519685378"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
