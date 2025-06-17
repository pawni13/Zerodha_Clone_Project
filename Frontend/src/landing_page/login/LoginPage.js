import React from 'react';
import './LoginPage.css';
import {useState} from 'react';
import axios from 'axios';


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userExistance, setUserExistance] = useState(true);

   
    const handleSubmit = (event)=>{
        
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/logIn`, {email, password})
        .then( (res)=>{
            //checks the status code. if 201, user is new and brings user in dashboard
            if(res.status === 201){
                setTimeout(()=>{
                    window.location.href = process.env.REACT_APP_DASHBOARD_URL;
                },500);
            //if 202, shows user a pop up, that the user exist & stays the user in signup page
            }else if(res.status === 202){
                setUserExistance(false);
            }
        })
        event.preventDefault();
        setEmail("");
        setPassword("");
    }

    const closePopup = ()=>{
        setUserExistance(true);
    }

    return ( 
        <div className='logIn-container'>
            <h2>Log In</h2>
            <form className='logIn-form' onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    required
                    onChange={(e)=> setEmail(e.target.value)}
                />

                <label htmlFor='password'>Password:</label>
                <input
                    value={password}
                    type='password'
                    id='password'
                    required
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <button type="submit">Log In</button>
            </form>
            { !userExistance && 
            <div className='popup'>
                <div className='popup-content'>
                    <p>Incorrect password or email! Please try again.</p>
                    <button onClick={closePopup}>Close</button>
                </div>
            </div>
            }
        </div>
    );
}

export default LoginPage;