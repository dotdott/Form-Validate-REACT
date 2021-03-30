import React from 'react';
import './App.css'

import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import AccountProvider from './components/contexts/AccountContext';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as ROUTES from './components/constants/routes';
import SignIn from './components/SignIn';

function App() {
    return (
        <AccountProvider>
        <Router>
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.SIGN_UP} component={SignUp} />
                <Route path={ROUTES.SIGN_IN} component={SignIn} />
        </Router>
        </AccountProvider>
    )
}

export default App;