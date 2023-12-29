import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const SignUp = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChange = (e, handleChanger) => {
        e.preventDefault();
        e.target.value.trim() !== 0 ? 
          handleChanger(e.target.value) : 
            alert("Input is empty");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:8000/api/signup", {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
          });
          const userId = response.data._id.toString();
          console.log(response.data);
          navigate(`/profile/${userId}`)

          Swal.fire({
            title: "Great!",
            text: `${firstname} ${lastname} successfully added!`,
            icon: "success"
          });
        } catch (error) {
          
          Swal.fire({
            title: "Oops...",
            icon: "error",
            text: "Something went wrong!",
          });
          console.log(error);
        }
    }
  return (
    <form className='w-60 flex flex-col gap-6 mx-auto pt-24' onSubmit={handleSubmit}>
      <input onChange={(e) => handleChange(e, setFirstname)} className='border border-gray-600 rounded-md pl-4 w-[100%] h-10 outline-none' type="text" name='firstname' value={firstname} placeholder='Firstname' />
      <input onChange={(e) => handleChange(e, setLastname)} className='border border-gray-600 rounded-md pl-4 w-[100%] h-10 outline-none' type="text" name='lastname' value={lastname} placeholder='Lastname' />
      <input onChange={(e) => handleChange(e, setEmail)} className='border border-gray-600 rounded-md pl-4 w-[100%] h-10 outline-none' type="text" name='email' value={email} placeholder='Email' />
      <input onChange={(e) => handleChange(e, setPassword)} className='border border-gray-600 rounded-md pl-4 w-[100%] h-10 outline-none' type="text" name='password' value={password} placeholder='Password' />
      <button className='w-28 h-9 rounded-lg text-white bg-red-600' type='submit'>Sign Up</button>
      <Link to={"/signin"}>Do you have an account?</Link>
    </form>
  )
}

export default SignUp