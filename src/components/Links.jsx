import React from 'react';
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephonePlusFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


function Links() {
  return (
    <div>
      <div className="flex flex-row w-[60%] mx-auto mt-20 justify-between">
        <div className=" flex flex-col w-[20%] ">
         <h2 className=" text-white text-3xl">About</h2>
         <p className="text-gray-500 pt-5 text-lg">A passionate web developer contributing to open source projects. Open for internship opportunity.</p>
        </div> 

        <div className="flex flex-col "> 
            <div className=" text-white text-3xl my-2 ">Links</div>
            <div>
                <ul className="text-gray-500 space-y-2 pt-4 text-lg">
                    <li>Home</li>
                    <li>About</li>
                    <li>Resume</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>

        <div className="flex flex-col">
            <div  className=" text-white text-3xl my-2">Have Questions?</div>
            <div className="flex flex-row gap-2 pt-4 text-lg">
                <div >
                    <HiLocationMarker className="text-gray-500 w-5 h-7 pt-2"/>
                </div>
                <div className="text-gray-500 pt-1">Kothapeta, Andhrapradesh</div>
            </div>
            
            <div className="flex flex-row gap-2 pt-4">
                <div >
                    <BsTelephonePlusFill className="text-gray-500 w-5 h-7"/>
                </div>
                <div className="text-gray-500 ">+91 7842929762</div>
            </div>
           
            <div className="flex flex-row gap-2 pt-4">
                <div >
                    <MdEmail className="text-gray-500 w-5 h-7"/>
                </div>
                <div className="text-gray-500 ">mounikarankireddy096@gmail.com</div>
            </div>
            
        </div>
       
      </div>
    </div>
  )
}

export default Links;
