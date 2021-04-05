import React, { useContext } from 'react'
import { Route, Redirect, RouteProps  } from 'react-router-dom'
import { AccountContext } from './contexts/AccountContext'
import * as ROUTES from './constants/routes';

interface RoutesProps extends RouteProps {
    exact?: true;
    path: string;
    component: React.FC;
} ;

export const PrivateLogin: React.FC<RoutesProps > = ({ component: Component, ...rest }: {
    component: React.ComponentType<RouteProps>
}) => {
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

const PrivateRoute: React.FC<RoutesProps> = ({ component: Component, ...rest }: {
    component: React.ComponentType<RouteProps> 
}) => {
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

export default PrivateRoute;