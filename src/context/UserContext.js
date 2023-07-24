import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'; 

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setuser] = useState(null)
    const [loading, setLoading] = useState(true)



    const registerUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }
    const updateUserProfile =(profile)=>{
        return updateProfile(auth.currentUser, profile)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    // get currently logged in user 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setuser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const authInfo = {user, registerUser, loginUser, logOut, loading, updateUserProfile} 

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;