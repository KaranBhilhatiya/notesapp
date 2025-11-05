import React, { useState } from 'react'
import Navbar from './navbar'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const Signup = () => {

  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const Submithandle = async (e) => {
    e.preventDefault()
    axios.post("http://localhost:8080/api/v1/user/signup", { fullname, email, password })
    .then(result => {
      if(result.data.success){
        console.log(result)
        navigate('/home')
        
      }
    })
    .catch(err => console.log(err)
    )

  }
return (
  <div className='flex flex-col h-[100vh] bg-[#ffedd5] w-[1280px] '>
    <Navbar />
    <div className='flex items-center mt-[10%] h-[600px] justify-center  w-full '>
      <div className='flex flex-col h-[70%] w-96 rounded-xl' >
        <div>
          <h2 className='flex flex-grow mt-4 font-semibold text-2xl justify-center' >Welcome back</h2>
          <form className='flex flex-col p-6 gap-4'>
            <input onChange={(e)=> setFullname(e.target.value)} value={fullname} className='p-4 border-black outline-none border rounded-full' name='fullname' type="text" placeholder='Username' />
            <input onChange={(e)=> setEmail(e.target.value)} value={email} className='p-4 border-black outline-none border rounded-full' name='email' type="text" placeholder='Email' />
            <input onChange={(e)=> setPassword(e.target.value)} value={password} className='p-4 border-black outline-none border rounded-full' name='password' type="text" placeholder='Password' />
            <button onClick={Submithandle} className='p-4 font-semibold items-center justify-center bg-black text-white rounded-full' >Signup</button>
          </form>
          <p className='font-semibold flex gap-1 flex-grow justify-center'>Already have an account? <Link to="/login"><button className='text-blue-600'> Login </button></Link></p>
        </div>
      </div>
    </div>
  </div>
)
}

export default Signup;