import { useState, createContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { FirebaseConfig, Firestore } from "../services";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const Context = createContext({});

export const Provider = ({ children }) => {
  const auth = getAuth(FirebaseConfig);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadStorageData = () => {
      const storageUser = sessionStorage.getItem("@AuthFirebase:user");
      const storageToken = sessionStorage.getItem("@AuthFirebase:token");

      if (storageToken && storageUser) {
        setUser(storageUser);
      }
    };

    loadStorageData();
  });

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        // console.log("user", user);
        setUser(user);

        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
        sessionStorage.setItem("@AuthFirebase:token", token);

        Firestore.createOrUpdateUser(user, user.uid);
        window.location.reload();
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        const email = err.email;
        const credential = GoogleAuthProvider.credentialFromError(err);
      });
  };

  const signOut = () => {
    sessionStorage.clear();
    setUser(null);

    return <Navigate to="/" />;
  };

  return (
    <Context.Provider
      value={{
        signed: !!user,
        user,
        signInWithGoogle,
        signOut,
      }}
    >
      {children}
    </Context.Provider>
  );
};
