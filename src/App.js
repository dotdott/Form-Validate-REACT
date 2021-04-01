import React from 'react';
import './App.css'

import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import AccountProvider from './components/contexts/AccountContext';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './components/constants/routes';
import SignIn from './components/SignIn';
import PrivateRoute, { PrivateLogin } from './components/UnAuthenticatedRoute';

function App() {
    return (
        <AccountProvider>
        <Router>
            <Switch>
                <PrivateRoute exact path={ROUTES.LANDING} component={LandingPage} />
                <PrivateLogin path={ROUTES.SIGN_IN} component={SignIn} />
                <Route path={ROUTES.SIGN_UP} component={SignUp} />
            </Switch>
        </Router>
        </AccountProvider>
    )
}

export default App;