import React, { useEffect, useState } from 'react';
import './homePage.css'
import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [name,setName] = useState('');
  const navigate = useNavigate();
  function logout(){
    localStorage.clear();
    navigate('/login');
  }
  useEffect(()=> {
    if(localStorage.getItem("token") == null){
      navigate('/login');
    }
    setName(localStorage.getItem("name"));

  })
  return (
    <div className='homePage'>
        <h1>Welcome  {name} ..!</h1>
        <button onClick={logout} className="LogOut">Logout</button>
        <h2>Make Your Own Link Tree..!</h2>
        <Link to={'/detail'} className="link" >Fill Out your Detail Here</Link>
        <span className='guyde'>Set linktree URL</span>
        <div className="domainname">
          <span>www.linktreek.com/</span>
          <input className='domain' type="text" />
          <button className='savedom'>Save</button>
        </div>
        <div className="theamSection">

        </div>
    </div>
  );
}
