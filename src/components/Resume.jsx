import React from "react";

function Resume() {
  return (
    <div className=" w-[75%] mt-20 flex flex-col justify-center items-center mx-auto">
      <h2 className="text-white text-4xl font-bold mb-5">Resume</h2>
      <p className=" text-gray-500 text-xl">
        Resume is a glimpse of my skills and experience.Let's connect and delve
        deeper into how can I contribute to{" "}
      </p>
      <p className=" text-gray-500 mt-2 text-xl">
        your team. Reach out to me for a fruitful discussion.{" "}
      </p>

      <div className="mt-8">
        <a
          target="_blank"
          className="bg-[#00ABF0] text-black px-4 py-3 rounded-3xl cursor-pointer"
          rel="ro referrer no-opener"
          href="https://drive.google.com/file/d/1Dx2L66g8q4Rq2CZtorQf9FD4FpVYY_GW/view?usp=drivesdk"
        >
          DOWNLOAD CV
        </a>
      </div>
    </div>
  );
}

export default Resume;
