import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseconfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDoc, doc, setDoc, getFirestore } from "firebase/firestore";
import userEvent from "@testing-library/user-event";

const app = initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;
  const userRef = doc(firestore, `user/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);
  if (!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(doc(firestore, `user/${userAuth.uid}`), {
        displayName,
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

export const firestore = getFirestore(app);
export const auth = getAuth();
auth.useDeviceLanguage();

const provider = new GoogleAuthProvider();
export const signInWithGoogle = signInWithPopup(auth, provider);
