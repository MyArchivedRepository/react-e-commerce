import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config =  {
    apiKey: "AIzaSyBkKhWDbiHnzf9UTIN3teMQlzDu4_IwxYU",
    authDomain: "e-commerce-7e8fb.firebaseapp.com",
    databaseURL: "https://e-commerce-7e8fb.firebaseio.com",
    projectId: "e-commerce-7e8fb",
    storageBucket: "e-commerce-7e8fb.appspot.com",
    messagingSenderId: "692957741698",
    appId: "1:692957741698:web:0b2b2e4fadc0386ffe6a9b",
    measurementId: "G-5ZGCTBZSEY"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`)

      const snapShot = await userRef.get();

      if(!snapShot.exists){

        const  {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log("error creating user", error.messege);

        }
         
      }

      return userRef;

 
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:"select_account"});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;