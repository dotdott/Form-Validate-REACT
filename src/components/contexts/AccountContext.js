import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../../firebase';

export const AccountContext = createContext({});

export default function AccountProvider({children}) {    
    const [currentUser, setCurrentUser] = useState('');
    const [loading, setLoading] = useState(true);
    const user = auth.currentUser;

    function SignUp(email, password, username) {
        return auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            
            user.updateProfile({
                displayName: username
            });
        });
    }

    function SignIn(email, password){
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
