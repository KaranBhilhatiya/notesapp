import React, { useState } from 'react'
import Sidebar from './sidebar'
import { BsPlusCircleFill } from "react-icons/bs";
import { IoChevronBackOutline } from "react-icons/io5";

const Home = () => {

  const [addnote, setAddnote] = useState(false)
  const [count, setCount] = useState(0)


  return (
    <div className='flex h-[100vh] bg-gray-700 w-[1280px]'>
      <Sidebar />
      <div className={`${!addnote ? 'flex transition-all duration-200 justify-center flex-grow ' : " hidden"}`} >
        <div className='flex flex-col h-[100vh] w-[600px] bg-white'>
          <h1 className='flex flex-grow justify-center font-bold text-6xl text-yellow-800 mt-[60%]'>What you gonna <br /> note today?</h1>
          <button onClick={() => setAddnote(!addnote)} className='flex text-yellow-900 m-6 ml-[85%] '><BsPlusCircleFill size={50} /></button>
        </div>
      </div>
      <div className={`${!addnote ? " hidden" : 'flex  transition-all duration-200 justify-center flex-grow '}`} >
        <div className='flex flex-col h-[100vh] w-[600px] bg-white'>
          <div className='flex flex-col gap-2 bg-white h-40 p-2 '>
            <div className='flex items-center justify-between'>
              <button onClick={() => setAddnote(!addnote)} className='text-yellow-950'><IoChevronBackOutline size={30} /></button>
              <button  className='bg-yellow-950 text-white font-semibold items-center flex p-2 rounded-full h-8'>Save</button>
            </div>
            <textarea maxLength={60} placeholder='Title' className=' h-20 text-gray-600 rounded-md font-bold items-start overflow-y-auto w-full text-3xl [scrollbar-width:none] outline-none p-1 resize-none' ></textarea>
            <p className='ml-1'>November 3 11:36 PM Mon | <span>{count}</span> Characters </p>
          </div>
          <div className='flex flex-col justify-between p-1 h-[100vh] '>
            <textarea onChange={(e) => setCount(count + 1)} maxLength={10000} placeholder='What you gonna write today?' className='font-semibold text-gray-600 w-full [scrollbar-width:none] outline-none p-2 resize-none' ></textarea>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home