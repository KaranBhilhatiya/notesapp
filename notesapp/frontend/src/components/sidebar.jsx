import React, { useState } from 'react'
import { BsLayoutSidebarInset } from "react-icons/bs";
import { LuCirclePlus } from "react-icons/lu";

const Sidebar = () => {

  const [openside, setOpenside] = useState(false)

  return (
    <div>
      <div className={` ${!openside ? 'h-[100vh] transition-all duration-200 w-[250px] bg-slate-800' : "h-[100vh] w-[60px] transition-all duration-200 bg-gray-800"} `}>
        <div className={`${openside ? " flex  items-center p-3 justify-center" : 'flex  flex-grow items-center justify-between p-2'}`}>
          <h1 className={`text-md text-white font-semibold ${openside && "hidden"}`} >Notespad</h1>
          <button className='text-white' onClick={() => setOpenside(!openside)}> <BsLayoutSidebarInset size={22} /> </button>
        </div>
        <div className='flex p-2'>
          <button className={`${ !openside ? 'flex bg-white transition-all duration-300  rounded-full p-2 items-center gap-1' : " flex-grow flex transition-all duration-300 text-white items-center justify-center"}`}> <LuCirclePlus size={30} /> 
          <span className={`${openside ? " hidden " : "text-gray-800 font-semibold"} `} >Create note</span> </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar