import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAuheKWb1RZuk3BOpzeO6SFFRaJXz_gn3M",
  authDomain: "crown-81e32.firebaseapp.com",
  databaseURL: "https://crown-81e32.firebaseio.com",
  projectId: "crown-81e32",
  storageBucket: "crown-81e32.appspot.com",
  messagingSenderId: "238061876330",
  appId: "1:238061876330:web:330275d66f2be0c6b34613",
};

// Auth with google and store the ayth in firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // if the snapShot doesn't exist, then create the data
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* to sign in with google
 * Need to enable sign with google in firebase
 */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
