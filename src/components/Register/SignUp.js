import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Password Missmatch');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 charecter');
            return;
        }
        if (phone.length < 11) {
            setError('Phone Number must be 11 charecter');
            return;
        }
        createUserWithEmailAndPassword(email, password,phone);
    }


    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Sign Up!!!</h3>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
                    </div>
                    <div className="input-group">

                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' id='' required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' id='' required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' id='' required></input>
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>

                <p> Already have an account? <Link className='form-link' to="/login">Login</Link></p>
                <hr></hr>
            </div>
        </div>
    );
};

export default SignUp;