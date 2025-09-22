import React from "react";
import { Shoe_1 } from "../../assets/image";

const Banner = () => {
  return (
    <div className="w-full p-5 md:mt-5 lg:mt-5 md:p-10 bg-[#40bfff] flex ">
      <div className="text-white w-[70%] ">
        <h1 className="text-lg md:text-2xl lg:text-4xl">
          Adidas Men Running Sneakers
        </h1>
        <p className="text-[10px] md:text-sm">
          Performance and design. Taken right to the edge.
        </p>

        <p className="text-[8px] text-sm lg:text-md font-bold mt-4 md:mt-5 cursor-pointer">
          <a href="#">SHOP NOW</a>
          <hr className="w-7 font-bold" />
        </p>
      </div>
      <div className="w-[40%] ">
        <img
          src={Shoe_1}
          alt=""
          className=" h-20 w-40 md:h-35 md:w-60 lg:h-45 lg:w-70"
        />
      </div>
    </div>
  );
};

export default Banner;
