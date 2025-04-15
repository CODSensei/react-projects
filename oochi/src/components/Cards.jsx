import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex gap-5 items-center px-32">
      <div className="cardcontainer  h-[50vh] w-1/2">
        <div className="card w-full h-full bg-[#004d43] relative rounded-xl flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 border-2 rounded-full px-5 py-2 text-[#cdea68] ]">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer  flex gap-5 h-[50vh] w-1/2">
        <div className="card relative w-1/2 h-full bg-[#192826] rounded-xl items-center justify-center flex ">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 border-2 rounded-full px-5 py-2 text-[#cdea68] ]">
            &copy;2019-2022
          </button>
        </div>
        <div className="card w-1/2 h-full relative bg-[#192826] rounded-xl items-center justify-center flex">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-10 bottom-10 border-2 rounded-full px-5 py-2 text-[#cdea68] ]">
            &copy;2019-2022
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
