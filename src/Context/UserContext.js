import React, { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Components/Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);



const UserContext = ({ children }) => {

            const [user, setUser] = useState({  });
            const [loading,setLoading] = useState(true);
            const createUser = (email,password) =>{
              return createUserWithEmailAndPassword(auth,email,password);
            }
          
            const signIn = (email,password) =>{
              return signInWithEmailAndPassword(auth,email,password)
            }
          
            const googleProvider = new GoogleAuthProvider();
            const signInWithGoogle = () =>{
              return signInWithPopup(auth, googleProvider)
            }
          
            const logOut = () =>{
              return signOut(auth);
            }
          
            useEffect(() =>{
              const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
                setUser(CurrentUser);
                setLoading(false)
                console.log("Auth state changed",CurrentUser)
              });
              return () => unsubscribe();
            }
            ,[])
          
            const authInfo = {user,loading,createUser,signIn,logOut,signInWithGoogle}  //Function er name use need
            return (
              <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
            );
};

export default UserContext;
