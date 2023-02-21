/* Contains Methods for Signup, Login and Logout. */

import React, { 
  createContext, 
  useContext, 
  useEffect, 
  useState 
} from "react";

import { 
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { auth } from "../config/firebase";

interface UserType {
  email: string | null;
  uid: string | null;
}

function createNewCollection(uid: string) {
  const db = firebase.firestore();
  db.collection(uid).add({
    title: "untitled",
    content: ""
  })
  .then(() => {
    console.log('New collection created successfully.');
  })
  .catch((error: any) => {
    console.error('Error creating collection:', error);
  });
}

const AuthContext = createContext({});

export const useAuth = () => useContext<any>(AuthContext);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>({ email: null, uid: null });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        });
        createNewCollection(user.uid);
      } else {
        setUser({ email: null, uid: null });
      }
    });
    setLoading(false);

    return () => unsubscribe();
  }, []);

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    setUser({ email: null, uid: null });
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};