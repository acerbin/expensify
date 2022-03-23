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
        <div className='wrapper'>
            <form>

                <input type='submit' value='Login' onClick={onLogin}/>
            </form>
        </div>
    )
}

export default LoginPage;