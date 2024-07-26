import React from 'react'
import { RiHome7Fill } from "react-icons/ri";
import { BsTelephonePlusFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className=" w-[95%] mx-auto flex flex-col justify-center items-center mt-24 ">
      <h2 className="text-white text-4xl font-bold pt-2">Contact Me</h2>

      <div className="w-[70%] mx-auto flex flex-row justify-between">

        <div className="flex flex-col mt-16 ">
         
           <div className='bg-[#00ABF0] rounded-full h-32 w-32 flex justify-center items-center cursor-pointer' > 

                <div>
                <RiHome7Fill  className='text-black  h-14 w-10'/>
                </div>

            </div>
           <div>
            <p className="text-white pl-8 pt-4">ADDRESS</p>
            {/* <p className="text-gray-500 text-lg pl-4">Kothapeta, AP</p> */}
           </div>
        </div>

        <div className="flex flex-col mt-16 ">
         
         <div className='bg-[#00ABF0] rounded-full h-32 w-32  flex justify-center items-center cursor-pointer'> 

         <div>
         <BsTelephonePlusFill className='text-black  h-14 w-10'/>
                </div>
         </div>
         <div>
          <p className="text-white pl-8 pt-4">CONTACT</p>
          {/* <p className="text-gray-500 text-lg pl-4">+91 7842929762</p> */}
         </div>
      </div>


      <div className="flex flex-col mt-16 ">
         
         <div className='bg-[#00ABF0] rounded-full h-32 w-32 flex justify-center items-center cursor-pointer'> 
         <div>
         <MdEmail  className='text-black  h-14 w-10'/>
                </div>

         </div>
         
         <div>
          <p className="text-white pl-11 pt-4">EMAIL</p>
          {/* <p className="text-gray-500 text-lg ">mounikarankireddy096@gmail.com</p> */}
         </div>
      </div>

      <div className="flex flex-col mt-16 ">
         
         <div className='bg-[#00ABF0] rounded-full h-32 w-32 flex justify-center items-center cursor-pointer'> 
         <div>
          
         < FaLinkedin  className='text-black  h-14 w-10'/>
                </div>
             
         </div>
         <div>
          <p className="text-white pl-8 pt-4 "> LINKED IN
          </p>
         
          {/* <p className="text-gray-500 text-lg">Mounika Rankireddy</p> */}
         </div>
      </div>




      </div>
    </div>
  )
}

export default Contact
