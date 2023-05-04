import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user ,setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [loading ,setLoading] = useState(true)

    const createUser = (email,password) =>{

        setLoading(false);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) =>{
        setLoading(false);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle = () =>{
        setLoading(false);
          return signInWithPopup(auth, provider);
    }  
  

    const signWithGithub =()=>{
        signInWithPopup(auth,githubProvider)
    }
    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,loggedUser => {
            console.log('loogeduser',loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })

        return ()=>{
            unsubscribe();
        }
    },[])

 

    const authInfo = {
        user,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        loading,
        signWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;