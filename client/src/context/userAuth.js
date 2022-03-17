import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const userAuthContext = createContext();


export function userAuthContextProvider({ children }) {
    // const [user,setuser] = useState("");
    function signUp(email, password){
        return createUserWithEmailAndPassword(auth ,email,password);
    }
    function Login(email, password){
        return signInWithEmailAndPassword(auth ,email,password);
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }

    // useEffect(()=> {
    //     const unsuscribe = onAuthStateChanged(auth,(currentUser) => {
    //         setuser(currentUser);
    //     });
    //     return () => {
    //         unsuscribe()
    //     }
    // }, [])
    return (
        <userAuthContext.Provider value={{googleSignIn}}>
            { children }
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}