import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.init";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    function registerUser(email, password) {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function loginUser(email, password) {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signInWithGoogle() {
        // setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    function updateUserProfile(userDetails) {
        return updateProfile(auth.currentUser, userDetails);
    }

    function logOut() {
        // setLoading(true);
        return signOut(auth);
    }

    // Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        setLoading,
        registerUser,
        loginUser,
        signInWithGoogle,
        updateUserProfile,
        logOut,
    };
    return <AuthContext value={authInfo}>{children}</AuthContext>;
}
