import React, { useEffect, useState } from 'react';
import './homePage.css'
import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [name,setName] = useState('');
  const navigate = useNavigate();
  useEffect(()=> {
    if(localStorage.getItem("token") == null){
      navigate('/login');
    }
    setName(localStorage.getItem("name"));

  })
  return (
    <div className='homePage'>
        <h1>Welcome  {name} ..!</h1>
        <h2>Make Your Own Link Tree..!</h2>
        <Link to={'/detail'} className="link" >Fill Out your Detail Here</Link>
    </div>
  );
}
