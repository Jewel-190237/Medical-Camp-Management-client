/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { app } from '../Firebase/Firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const axiosSecurePublic = useAxiosPublic();

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            
            console.log(currentUser);
            if (currentUser) {
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

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOutUser,
        
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