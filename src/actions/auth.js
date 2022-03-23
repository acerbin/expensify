import {auth, provider} from '../firebase/firebase';
import { signInWithPopup, signOut } from "firebase/auth";

export const login = (uid) => ({
        type: "LOGIN",
        uid
    })

export const logout = () => ({
        type: "LOGOUT"
    })


export const startLogin = () => {
    return () => {
        return signInWithPopup(auth, provider);
    }
}

export const startLogout = () => {
    return () => {
        return signOut(auth);
    }
}