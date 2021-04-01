import React, { useContext } from 'react'
import { AccountContext } from './contexts/AccountContext'
import { useHistory } from 'react-router-dom'

export default function LandingPage() {
    const { SignOut, user } = useContext(AccountContext);
    const history = useHistory();
    
    async function Logout(){
        await SignOut();

        history.push('/login');
    }

    return (
        <div className="App">
            <h1>HomePage</h1>

            <div className="form-container">
                <p className="greetings">
                    Hello, {user.displayName}.
                </p>

                <button onClick={Logout}>Logout</button>
            </div>
        </div>
    )
}
