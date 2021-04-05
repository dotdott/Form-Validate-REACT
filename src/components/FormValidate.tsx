import React from 'react';

interface FormValidateProps {
    username?: string;
    email: string;
    password: string;
    password2?: string;
}

interface ErrorsData {
    name?: string;
    email: string;
    password: string;
    password2?: string;
}

const FormValidate = (inputValues: FormValidateProps) => {
    const errors = {} as ErrorsData;

    
    if(!inputValues.username){
        errors.name = 'Enter a username';
    }
    
    if(!inputValues.email){
        errors.email = 'Enter a email';
    } else if(!/\S+@\S+\.\S+/.test(inputValues.email)){
        errors.email = 'Invalid e-mail address';
    }

    if(!inputValues.password) {
        errors.password = 'Enter a password';
    } else if(inputValues.password.length < 6){
        errors.password = 'Enter a password with mininum 6 characters';
    }

    if(!inputValues.password2){
        errors.password2 = 'Enter your password again';
    } else if(inputValues.password2 !== inputValues.password){
        errors.password2 = 'Passwords do not match';
    }
    return errors;
}

export default FormValidate;