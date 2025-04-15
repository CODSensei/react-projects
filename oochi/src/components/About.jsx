import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#cdea68] rounded-t-3xl text-black ">
      <h1 className="text-[3vw] leading-[3vw] font-medium tracking-tight">
        {" "}
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to <u>raise funds</u>, <u>sell prod­ucts</u>,{" "}
        <u>ex­plain com­plex ideas</u>, and <u>hire great peo­ple</u>.
      </h1>
      <div className="w-full flex gap-5 border-t mt-20 pt-10 border-t-[#a1b562]">
        <div className="w-1/2 ">
          <h1 className="text-7xl">Our approach</h1>
          <button className="px-12 py-5 bg-zinc-900 mt-7 rounded-full text-white flex items-center gap-6">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]"></div>
      </div>
    </div>
  );
}

export default About;
