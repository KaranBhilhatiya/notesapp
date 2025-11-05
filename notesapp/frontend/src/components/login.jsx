import React, { useState } from 'react'
import Navbar from './navbar'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()


  const submithandle = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/v1/user/login", { email, password })

      .then(result => {
        console.log(result)
        if (result.data.success) {
          navigate('/home')
        }

      })
      .catch(err => console.log(err))
  };

  return (
    <div className='flex flex-col h-[100vh] bg-[#ffedd5] w-[1280px]'>
      <Navbar />
      <div className='flex  items-center mt-[10%] h-[600px] justify-center  w-full '>
        <div className='flex flex-col h-[60%] w-96 rounded-xl' >
          <div>
            <h2 className='flex flex-grow mt-4 font-semibold text-2xl justify-center' >Welcome back</h2>
            <form className='flex flex-col p-6 gap-4'>

              <input onChange={(e) => setEmail(e.target.value)} className='p-4 border-black outline-none border rounded-full' value={email} name='email' type="text" placeholder='Email' />
              <input onChange={(e) => setPassword(e.target.value)} className='p-4 border-black outline-none border rounded-full' value={password} name='password' type="text" placeholder='Password' />
              <button onClick={submithandle} className='p-4 font-semibold items-center justify-center bg-black text-white rounded-full' >Login</button>
            </form>
            <p className='font-semibold flex gap-1 flex-grow justify-center'>Dont have an account? <Link to="/signup"><button className='text-blue-600'>Signup</button></Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login