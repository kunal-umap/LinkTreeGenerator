import React from 'react';
import './login.css';
import Gicon from'../../assets/image/google.png';
import { authentication } from '../../config/firebaseConfig';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';



export default function LoginSignup() {

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((res)=> {
      console.log(res)

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
