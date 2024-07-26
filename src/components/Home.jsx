import React from "react";
const Home =() =>{
    return (
        <div >
         <div className=" space-y-3 px-32 flex flex-col mt-44 h-full ">
         <p className="text-[#00ABF0]">HELLO !</p>
         <div className="flex space-x-3">

         <p className="text-white text-5xl font-extrabold">I'M </p>
         <p className="text-[#00ABF0] text-5xl font-extrabold">RANKIREDDY </p>
         
         </div>
         <p className="text-[#00ABF0] text-5xl font-extrabold">MOUNIKA </p>

         <p className=" text-white text-3xl pt-7 ">An undergraduate of KIETW</p>

         <div className="space-x-6 font-small pt-5">

         <a href="https://www.linkedin.com/in/mounika-rankireddy-23786b269/" target='_blank'> <button className=" text-black bg-[#00ABF0] rounded-3xl px-5 py-3">CONNECT WITH ME</button></a>
            {/* <button className=" text-black bg-[#00ABF0] rounded-3xl px-5 py-3">CONNECT WITH ME</button> */}
            <button  className=" text-[#00ABF0] bg-black rounded-3xl px-7 py-3 border border-[#00ABF0]">MY WORKS</button>
         </div>
         </div>
 

        </div>
    )
}
export default Home;
