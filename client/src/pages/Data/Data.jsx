import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./data.css";
export default function Data() {
  const [name,setName] = useState('');
  const [info,setInfo] = useState('');
  const navigate = useNavigate();
  useEffect(()=> {
    if(localStorage.getItem("token") == null){
      navigate('/login');
    }
    setName(localStorage.getItem("name"));

  })
  return (
    <div className='data'>
      <form onSubmit={''} className="Detailform">
        <input type="text" required={true} defaultValue={name}  name="" id="" />
        <input type="text"  placeholder="Twitter Link"  name="" id="" />
        <input type="text"  placeholder="Linkedin Link"  name="" id="" />
        <input type="text"  placeholder="Instagram Link"  name="" id="" />
        <textarea name=""  contentEditable={true} defaultValue={'Write Info HEre'} id="" cols="30" rows="10"></textarea>
        <button type="submit">Save</button>

      </form>
    </div>
  )
}
