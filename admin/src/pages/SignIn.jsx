import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, handleChanger) => {
    e.preventDefault();
    e.target.value.trim() !== 0 ? 
      handleChanger(e.target.value) : 
        alert("Input is empty");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8000/api/signin");

  }
  return (
    <form className='w-60 flex flex-col gap-6 mx-auto pt-24' onSubmit={handleSubmit}>
      <input onChange={(e) => handleChange(e, setEmail)} className='border border-gray-600 rounded-md pl-4 w-[100%] h-10 outline-none' type="text" name='email' value={email} placeholder='Email' />
      <input onChange={(e) => handleChange(e, setPassword)} className='border border-gray-600 rounded-md pl-4 w-[100%] h-10 outline-none' type="text" name='password' value={password} placeholder='Password' />
      <button className='w-28 h-9 rounded-lg text-white bg-red-600' type='submit'>Sign In</button>
      <Link to={"/signup"}>Don't have an account?</Link>
    </form>
  )
}

export default SignIn