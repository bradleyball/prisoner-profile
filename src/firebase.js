import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBuayZhuRlyh9_tise3NjezlK_yjR8UDTA",
  authDomain: "prison-skills.firebaseapp.com",
  databaseURL: "https://prison-skills.firebaseio.com",
  projectId: "prison-skills",
  storageBucket: "prison-skills.appspot.com",
  messagingSenderId: "139128544940"
};
firebase.initializeApp(config);

window.firebase = firebase;

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  //Get a reference to the place in the database where a user profile might be
  const userRef = firestore.doc(`users/${user.uid}`);
  //Go and fetch document from that location
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const createdAt = new Date();
    const { displayName, email, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("Error created");
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    return firestore.collection("users").doc(uid);
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};

export const firestore = firebase.firestore();

const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default firebase;
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
