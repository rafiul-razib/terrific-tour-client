import { useEffect, useState } from 'react';
import initializeAuthentication from '../Login/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


initializeAuthentication();
const useFirebase = () => {
    const[user, setUser] = useState({});
    const[isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
        // .then(result =>{
        //     setUser(result.user)
        // })
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{})
        .finally(
            setIsLoading(false)
        )
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return unsubscribe
    },[])

    return (
        {
            user,
            signInWithGoogle,
            logOut,
            isLoading,
            setIsLoading

        }
    );
};

export default useFirebase;