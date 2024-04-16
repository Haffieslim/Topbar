import React from 'react'
import './topbar.css'
import Image from '../../../assets/istockphoto-1134072804-612x612.jpg'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <>
    <div className='topbar'>
       
    <span id='left'>
         <span><FaBarsStaggered /></span>
        <h1>Welcome! John Smith</h1>
        
    </span>
     <span id='right'>
        <span><FaRegBell /></span>
        <img src={Image} alt="" />
        <h2>Alex Robert</h2>
        <span><RiArrowDropDownLine /></span>
     </span>
        
    </div>
    </>
  )
}

export default Topbar