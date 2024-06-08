/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { app } from '../Firebase/Firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const axiosSecurePublic = useAxiosPublic();

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            console.log(currentUser);
            if (currentUser) {
                const currentUserInfo = {
                    name: currentUser.displayName,
                    email: currentUser.email,
                    photo: currentUser.photoURL
                }
                const userInfo = { email: currentUser.email };
                axiosSecurePublic.post('/jwt', userInfo)
                    .then(res => {
                        console.log(res.data)
                        if (res.data) {
                            window.localStorage.setItem('access-token', res.data)
                            setUser(currentUser);
                            setLoading(false);
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token');
                setUser(null);
                setLoading(false);
            }

        })
        return () => {
            unSubscribe;
        }
    }, [axiosSecurePublic])



    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOutUser,
        googleSignIn

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;