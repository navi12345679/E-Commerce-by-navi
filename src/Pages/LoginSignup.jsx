
import React from 'react';
import './CSS/loginsignup.css';

const LoginSignup = () => {
    return (
        <div className='loginsignup-container'>
<div className='login-container'>
            <h1>Sign up</h1>
            <div className='loginsignup-fields'>
            <label>Username: </label>
           <input type='text' placeholder='username'/>
           <label>Password: </label>
          <input type='text' placeholder='password' />
          <label>Address: </label>
          <input type='text' placeholder='enter your present address' />
         </div>
         <button>Continue</button>
          <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
          <div className='loginsignup-agree'>
            <input type='checkbox' name='' id=''/>
            <p>by continuing, I agree the terms of use and privacy policy.</p>
               </div>
          </div>
            </div>
    );
};

export default LoginSignup;