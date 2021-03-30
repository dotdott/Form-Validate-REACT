import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../../firebase';

export const AccountContext = createContext({});

export default function AccountProvider({children}) {    
    const [userEmail, setUserEmail] = useState('');
    const user = auth.currentUser;

    function SignUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function SignIn(email, password){
        return auth.signInWithEmailAndPassword(email, password);
    }

    function SignOut() {
        return auth.signOut();
    }

    
    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            if(user) {
                setUserEmail(user.email);
            }
        })
    }, [])
 
    return (
       <AccountContext.Provider value={{
           SignUp,
           SignIn,
           SignOut,
           user,
           userEmail
       }}>
           {children}
       </AccountContext.Provider>
    )
}
