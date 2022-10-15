import React from "react";
import {useDispatch} from 'react-redux';
import {useNavigate,useLocation} from 'react-router-dom';
import { useState } from "react";
import { login } from "../Redux/AuthReducer/action";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";

const Login = () => {
  const dispatch=useDispatch();
const navigate = useNavigate();
const location=useLocation();
  const [email,setEmail] =useState('');
  const [password,setPassword]=useState('');

const comingFrom=location.state?.from?.pathname || '/';


const handleSubmit=(e)=>{
e.preventDefault();
if(email && password){
  dispatch(login({email,password}))
  .then((r)=>{
    if(r.type ===LOGIN_SUCCESS){
      navigate(comingFrom,{replace:true})
    }
  })
}
}


  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input  placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input  placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit" >
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
