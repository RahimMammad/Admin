import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-[100%] h-20 bg-slate-500'>
        <div className='max-w-[50%] mx-auto p-6'>
            <ul className='w-[100%] flex justify-between items-center'>
                <Link to={"/"} className='text-white'>Home</Link>
                <Link to={"/signup"} className='text-white'>SignUp</Link>
                <Link to={"/signin"} className='text-white'>SignIn</Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar