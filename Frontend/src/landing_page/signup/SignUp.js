//import React from 'react';

//function SignUp() {
  //  return (
    //<h1>SignUp</h1> 
//);
//}

//export default SignUp;
import React from 'react';
import './SignUp.css';
import {useState} from 'react';
import axios from 'axios';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userExistance, setUserExistance] = useState(false);

    const closePopup = ()=>{
        setUserExistance(false);
    }

    const handleSubmit = (event)=>{

        event.preventDefault();

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/signUp`, {email, password})
        .then( (res)=>{
            //checks the status code. if 201, user is new and brings user in dashboard
            if(res.status === 201){
                setTimeout(()=>{
                    window.location.href = process.env.REACT_APP_DASHBOARD_URL;
                    
                },500);
                
            //if 202, shows user a pop up, that the user exist & stays the user in signup page
            }else if(res.status === 202){
                setUserExistance(true);
            }
        })

        
        setEmail("");
        setPassword("");
    }

    return ( 
        <div className='signup-container' data-testid="signup-container">
            <h2>Sign Up</h2>
            <form className='signup-form' onSubmit={handleSubmit}>
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
                <button data-testid="signupButton" type="submit">Sign Up</button>
            </form>
            {userExistance && 
            <div className='popup'>
                <div className='popup-content'>
                    <p>The user already exists! Please Log in</p>
                    <button onClick={closePopup}>Close</button>
                </div>
            </div>
            }
        </div>
    );
}

export default SignUp;