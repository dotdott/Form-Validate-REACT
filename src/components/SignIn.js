import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { AccountContext } from './contexts/AccountContext';

import FormValidate from './FormValidate';

export default function SignIn() {
    const { SignIn, user } = useContext(AccountContext);

    const [inputValues, setInputValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await SignIn(inputValues.email, inputValues.password);

            if(user){
                history.push('/');
            }

        } catch(err) {
            setErrors(FormValidate(inputValues))
            if(err.code === "auth/too-many-requests"){
                setErrors({
                    requestLimit: 'Access to this account has been temporarily disabled due to many failed login attempts.'
                })
            }
            if(err.code === "auth/wrong-password") {
                setErrors({
                    wrongPass: 'The password is invalid.'
                })
            }
            if(err.code === "auth/user-not-found"){
                setErrors({
                    notFound: 'There is no user record corresponding to this identifier. The user may have been deleted.'
                })
            }
        }  
    }

    const handleChanges = e => {
        const {name, value} = e.target;

        setInputValues({
            ...inputValues,
            [name]: value
        })
    }


    return (
        <div className="App">
            <h1>Sign In</h1>
            <div className="form-container" >
                <form onSubmit={e => handleSubmit(e)} noValidate>
                    <input 
                        type="email"
                        name="email"
                        placeholder="User Email Address"
                        onChange={handleChanges}
                    />
                        {errors.email && <p>{errors.email}</p>}
                        {errors.notFound && <p>{errors.notFound}</p>}
                    <input 
                        type="password"
                        name="password"
                        placeholder="User Password"
                        onChange={handleChanges}
                    />
                        {errors.password && <p>{errors.password}</p>}
                        {errors.wrongPass && <p>{errors.wrongPass}</p>}
                        {errors.requestLimit && <p>{errors.requestLimit}</p>}
                    <button type="submit">Log In</button>

                    <div className="login">
                        <p>Still dont have an account?</p>
                        <Link to={ROUTES.SIGN_UP}>Sign Up Now!</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
