import React from 'react';
import "./login.css";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context} from '../../context/Context';
import axios from 'axios';
import { useRef } from 'react';
import { LoginSuccess } from '../../context/Actions';


export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching} = useContext (Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("/auth/login",{
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch(LoginSuccess(res.data));
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"});
    }
  };

  return (
    <div className='login'>
        <span className="loginTitle">Welcome..! To The DevOps World</span>
        <form className='loginForm' onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
              type="text" 
              className='loginInput' 
              placeholder="Enter your username..." 
              ref={userRef}
            />
            <label>Password</label>
            <input 
              type="password" 
              className='loginInput' 
              placeholder="Enter your password..." 
              ref={passwordRef}
            />
            <button 
              className='loginButton' 
              type='submit' 
              disabled ={isFetching}
            ><Link className='link' to= "/home">Login</Link></button>
        </form>
        <button className='loginRegisterButton'>
          <Link className='link' to="/register">Register</Link>
        </button>
    </div>
  )
}
