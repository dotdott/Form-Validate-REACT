import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AccountContext } from './contexts/AccountContext'
import * as ROUTES from './constants/routes';


export function PrivateLogin({ component: Component, ...rest }){
    const { currentUser } = useContext(AccountContext)

    return (
       <Route 
            {...rest}
            render={props => {
                return !currentUser ? <Component {...props} />  : <Redirect to={ROUTES.LANDING} />
                }
            }
       />
    )
}

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useContext(AccountContext)

    return (
       <Route 
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to={ROUTES.SIGN_IN} />
                }
            }
       />
    )
}
