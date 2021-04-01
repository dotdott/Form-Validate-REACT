import React, { useState, useEffect, useContext } from 'react';
import { AccountContext } from './contexts/AccountContext';
import FormValidate from './FormValidate';
import { Link } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Form = () => {
    const [inputValues, setInputValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        weakpass: '',
        inUseEmail: ''
    })

    const [errors, setErrors] = useState({});
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [checkbox, setCheckbox] = useState(false);

    const [sucessMessage, setSucessMessage] = useState(false);


    const { SignUp } = useContext(AccountContext);

    const handleSubmit = async e => {
        e.preventDefault();
        
        setErrors(FormValidate(inputValues));

        try {
            if(Object.keys(errors).length === 0 && isSubmitting === true && checkbox === true && isSubmitted === false){
                await SignUp(inputValues.email, inputValues.password, inputValues.username);
                setIsSubmitted(true)
            }
        } catch (err) {
            if(err.code === "auth/weak-password"){
                setErrors({
                    weakpass: 'Password should be at least 6 characters'
                })
            }
            if(err.code === "auth/email-already-in-use"){
                setErrors({
                    inUseEmail: 'The email address is already in use by another account.'
                })
            }
        }
        setIsSubmitting(true);
    }

    const handleChanges = e => {
        const {name, value} = e.target;

        setInputValues({
            ...inputValues,
            [name]: value
        })
    }

    
    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting === true && checkbox === true && isSubmitted === true){
            setInputValues({
                username: '',
                email: '',
                password: '',
                password2: '',
                weakpass: '',
                inUseEmail: ''
            })

            setSucessMessage(true);
            setCheckbox(false);
            setIsSubmitting(false);
            setIsSubmitted(false);
            
            document.querySelector('#form-validate').reset();

        }
    }, [errors]);

    return (    
        <div className="App">
            <h1>Register form</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit} autoComplete="off" id="form-validate" noValidate>
                    <div className={sucessMessage ? 'modal active' : 'modal'}> 
                        <h1>
                        Register  with sucess!
                        <span onClick={() => setSucessMessage(false)}>X</span>
                        </h1>
                    </div>
                        <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        className="username" 
                        placeholder="Username"
                        onChange={handleChanges}                        
                        />
                        {errors.name && <p>{errors.name}</p>}

                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="email" 
                            placeholder="Email"
                            onChange={handleChanges}                        
                            />
                        {errors.email && <p>{errors.email}</p>}
                        {errors.inUseEmail && <p>{errors.inUseEmail}</p>}

                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="password" 
                            placeholder="Password"
                            onChange={handleChanges}                        
                            />
                        {errors.password && <p>{errors.password}</p>}
                        {errors.weakpass && <p>{errors.weakpass}</p>}

                        <input 
                            type="password" 
                            name="password2" 
                            id="password2" 
                            className="password2" 
                            placeholder="Confirm password"
                            onChange={handleChanges}                        
                            />
                        {errors.password2 && <p>{errors.password2}</p>}
                        {errors.weakpass && <p>{errors.weakpass}</p>}
                    
                    <div className="condition-use">
                        <div className="checkbox-input">
                            <input type="checkbox" id="checkbox" onClick={() => setCheckbox(!checkbox)}/>
                            <label htmlFor="checkbox"> I agree with <i>website</i> terms of uses</label>
                            {checkbox ||
                            <small>'You need to agree with terms of use to register'</small>
                            }
                        </div>
                    <button type="submit">Sign up</button>
                    </div>
                    <div className="login">
                    <p>Already have an account?</p>
                    <Link to={ROUTES.SIGN_IN}>Login here</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;