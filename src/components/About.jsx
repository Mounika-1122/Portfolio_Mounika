import React from 'react'

function About() {
  return (
   
    <div className=" w-[75%]  flex flex-col items-end justify-center mx-auto mt-20">
        <div className="flex justify-start flex-col w-[60%]">
          <p className="text-white text-4xl font-bold ">About Me</p>
          <p className=" text-gray-500 pt-5 text-lg">
            I'm a passionate student,</p> 
            <p className=" text-gray-500 text-lg">Pursuing my bachelors in computer science
            and engineering from Kakinada Institute Of Engineering And
            Technologies For Womens. I have completed Python. Currently focusing
            on MERN stack.
          </p>
          <div className="mt-14">
            <div className="flex flex-column ">
              <div className="text-white w-[200px] text-xl font-bold">Name:</div>
              <div className="text-gray-500 text-xl "> Mounika</div>
              
            </div>

            <div className="flex flex-column mt-4">
              <div className="text-white w-[200px] text-xl font-bold">Date Of Birth:</div>
              <div className="text-gray-500 text-xl"> 20 April, 2005</div>
              
            </div>

            
            <div className="flex flex-column mt-4">
              <div className="text-white w-[200px] text-xl font-bold">Address:</div>
              <div className="text-gray-500 text-xl">kothapeta, Andhrapradesh</div>
              
            </div>

            <div className="flex flex-column mt-4">
              <div className="text-white w-[200px] text-xl font-bold">Email:</div>
              <div className="text-gray-500 text-xl">mounikarankireddy096@gmail.com</div>
              
            </div>


            <div className="flex flex-column mt-4">
              <div className="text-white w-[200px] text-xl font-bold">Phone:</div>
              <div className="text-gray-500 text-xl"> +91 7842929762</div>
              
            </div>

            <div className="mt-10">
              <button className="bg-[#00ABF0] text-black px-4 py-3 rounded-3xl cursor-pointer">DOWNLOAD CV</button>
            </div>


          </div>
        </div>
      </div>


  )
}

export default About;
