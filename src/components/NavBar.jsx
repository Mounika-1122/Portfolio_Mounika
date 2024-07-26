import React from 'react';
import {FaBars} from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex items-center w-[full] justify-between h-20 px-32 text-white ">
     <div>
        <h1 className="text-3xl font-bold ">MOUNIKA</h1>
        </div> 
        <ul className="flex space-x-14 ml-96 ">
            <li className=" cursor-pointer text-[#00ABF0]" >Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Resume</li>
            <li className="cursor-pointer">Skills</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">Contact</li>
        </ul>
    </div>
  )
}

export default NavBar
