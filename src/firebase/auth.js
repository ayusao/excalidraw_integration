import { auth } from "../firebase"; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth"; 

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    // You get user info like this
    const user = result.user;
    console.log("Google sign-in successful:", user);
    return user;
  } catch (error) {
    console.error("Google sign-in error:", error);
    throw error;
  }
};

export const doSignOut = () => {
    return signOut(auth);
  };

