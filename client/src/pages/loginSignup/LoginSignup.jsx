import React, { useState } from 'react';
import './login.css';
import Gicon from'../../assets/image/google.png';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/userAuth';
import { async } from '@firebase/util';

// const Login = () => {
  //   // const [email,setEmail] = useState("");
  //   // const navigate = useNavigate();
  // }
  const handleGoogleSignin = async (e) => {
  const{ googleSignIn } = useUserAuth();
  e.preventDefault();
  try{
    await googleSignIn();
  }catch( err ){
    console.log(err)
  }
}
export default function LoginSignup() {
  return (
    <div className='loginPage'>
      <div className="box box1"></div>
      <div className="box box2"></div>
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="loginCard">
        <h1 className='loginHeading'>Login</h1>
        <p className='loginDetail'>
          Login to create your own link tree just with one click fully custoimizable
        </p>
        <button className="loginOption" onClick={ handleGoogleSignin}>
          <img src={Gicon} alt="" />
        </button>
      </div>
    </div>
  );
}
