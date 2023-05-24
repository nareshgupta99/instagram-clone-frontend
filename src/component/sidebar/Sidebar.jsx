import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import menu from './sidebar-config'
import { useNavigate } from 'react-router-dom'
import "./sidebar.css"
function Sidebar() {
const[active,setActive]=useState("")
  const navigate=useNavigate();

  const handleClick=(title,e)=>{
    setActive(title)
    if(title==="Profile"){
      navigate("/username")
    }
    if(title==="Home"){
      navigate("/")
    }
    if(title==="Message"){
      navigate("/direct/inbox")
    }
    if(title==="Explore"){
      navigate("/explore")
    }
    if(title==="Reels"){
      navigate("/reels")
    }
    
  }

  return (
    <div className='border-r-[1px] h-[100%]  '>
      <div className='border-gray-400  side-menu sticky top-0 w-56'>
        <div className='pt-10'>
          <img className='w-40 cursor-pointer px-5 ' src='https://i.imgur.com/zqpwkLQ.png' alt='' />
        </div>
        <div className='mt-10'>
      {menu.map((item)=><div className='flex mb-5 items-center text-lg cursor-pointer ' onClick={()=>handleClick(item.title)}>
        
        <i className='pl-4 '>{active===item.title?item.activeIcon:item.icon}</i>
        <p className={item.title===active?'font-semibold':'font-normal'}>{item.title}</p>
        </div>)}
        </div>
      <div className='flex items-center cursor-pointer pl-5 mt-24 text-lg '>
      <AiOutlineMenu className='font-extrabold w-5  text-[26px]' />
      <p className='ml-5'>More</p>
      </div>
      </div>
      
    </div>
  )
}

export default Sidebar