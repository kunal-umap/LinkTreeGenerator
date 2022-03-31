import React from 'react';
import './login.css';
import Gicon from'../../assets/image/google.png';
import { authentication } from '../../config/firebaseConfig';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';


export default function LoginSignup() {

  const navigate = useNavigate();
  function signInWithGoogle(event) {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((res)=> {
      localStorage.setItem("token",res.user.accessToken)
      localStorage.setItem("name",res.user.displayName)
      localStorage.setItem("email",res.user.email)
      if(res._tokenResponse.isNewUser == true){
        navigate('/');
      }
      navigate('/');
    }).catch((err)=> {
      alert(err);
    })
  }


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
        <button className="loginOption" >
          <img src={Gicon} alt="" onClick={signInWithGoogle} />
        </button>
      </div>
    </div>
  );
}
