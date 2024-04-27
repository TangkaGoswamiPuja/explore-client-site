import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const googleAProvider = new GoogleAuthProvider();
const provider = new GithubAuthProvider();

const auth = getAuth(app)
const Auth = ({ children }) => {

   
    const [user, setUser] = useState(null)
    const [load, setLoad] = useState(true)
    const createUser = (email, password) => {
        setLoad(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoad(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () => {
        setLoad(true);
        return signInWithPopup(auth, googleAProvider)
    }

    const gitHub = () => {
        setLoad(true);
        return signInWithPopup(auth, provider)
    }


    const logOut = () => {
        setLoad(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user in the auth state changed", currentUser)
            setUser(currentUser);
            setLoad(false)
        });
        return () => { unSubscribe() }
    }, [])

    const authInfo = {
       
        user,
        load,
        createUser,

        signIn,
        signInGoogle,
        gitHub,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    );
};

export default Auth;