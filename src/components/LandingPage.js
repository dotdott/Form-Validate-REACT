import React, { useContext } from 'react'
import { AccountContext } from './contexts/AccountContext'
import { useHistory } from 'react-router-dom'

export default function LandingPage() {
    const { SignOut, user } = useContext(AccountContext);
    const history = useHistory();
    
    async function Logout(){
        await SignOut();

        history.push('/signin');
    }

    return (
        <div>
        {user ? (
           <p>Hello {user.email} </p>

        ) : (
            <p>Hello, stranger.</p>
        )}
        <button onClick={Logout}>Sign out</button>
        </div>
    )
}
