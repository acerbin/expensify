import React from 'react';
import { startLogin } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// <input type='text' name='email' placeholder='Email'/>
// <input type='password' name='password' placeholder='Password'/>

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin()).then(() => {
            navigate('/dashboard')
        })
    }
    return (
        <div className='wrapper box-layout'>
            <div className='box-layout__box'>
                <h1 className='box-layout__box__heading'>Expensify</h1>
                <p>Put your expenses under control.</p>
                <input className='active-button' type='submit' value='Login with Google' onClick={onLogin}/>
            </div>
        </div>
    )
}

export default LoginPage;