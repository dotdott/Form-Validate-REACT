import React, { useContext } from 'react'
import { AccountContext } from './contexts/AccountContext'
import { useHistory } from 'react-router-dom'
import * as ROUTES from './constants/routes';

export default function LandingPage() {
    const { SignOut, user } = useContext(AccountContext);
    const history = useHistory();
    
    async function Logout(){
        await SignOut();

        history.push(ROUTES.SIGN_IN);
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
