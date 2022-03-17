import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const userAuthContext = createContext();


export function userAuthContextProvider({ children }) {
    const [user,setuser] = useState("");
    function signUp(email, password){
        return createUserWithEmailAndPassword(auth ,email,password);
    }
    function Login(email, password){
        return signInWithEmailAndPassword(auth ,email,password);
    }
    useEffect(()=> {
        const unsuscribe = onAuthStateChanged(auth,(currentUser) => {
            setuser(currentUser);
        });
        return () => {
            unsuscribe()
        }
    }, [])
    return (
        <userAuthContext.Provider value={}>
            { children }
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}