import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../../firebase';
import firebase from 'firebase/app'

interface AccountContextData {
    SignUp: (email: string, password: string, username: string) => Promise<void>
    SignIn: (email: string, password: string) => Promise<firebase.auth.UserCredential>
    SignOut: () => Promise<void>;
    user: firebase.User | null;
    currentUser: firebase.User | null;
}

interface AccountProviderProps {
    children: React.ReactNode;
}


export const AccountContext = createContext({} as AccountContextData);

export default function AccountProvider({children}: AccountProviderProps) {    
    const [currentUser, setCurrentUser] = useState
    <firebase.User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const user = auth.currentUser;

    function SignUp(email: string, password: string, username: string) {
        return auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user: firebase.User | null = userCredential.user;
            
            user?.updateProfile({
                displayName: username
            });
        });
    }

    function SignIn(email: string, password: string){
        return auth.signInWithEmailAndPassword(email, password);
    }

    function SignOut() {
        return auth.signOut();
    }

    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);            
        })

        return unsubscribe;
    }, [])
 
    return (
       <AccountContext.Provider value={{
           SignUp,
           SignIn,
           SignOut,
           user,
           currentUser
       }}>
           {!loading && children}
       </AccountContext.Provider>
    )
}
