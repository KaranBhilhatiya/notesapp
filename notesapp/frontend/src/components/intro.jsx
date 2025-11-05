import React from 'react'
import Navbar from './navbar'
import k1 from '../assets/k1.png'

const Intro = () => {


  return (
    <div className='flex flex-col h-[100vh] bg-[#ffedd5] w-[1280px]'>
      <Navbar />
      <div className='flex h-[800px] justify-center w-full  '>
        <div >
          <img src={k1} alt="Banner" width={1280} />
        </div>
      </div>
    </div>
  )
}

export default Intro