import React from "react";

const colorClassMap = {
  black: "bg-black",
  red: "bg-red-500",
  blue: "bg-blue-500",
  yellow: "bg-yellow-400",
  pink: "bg-pink-400",
  platinum: "bg-[#efdfdf]",
};

const ColorOption = () => {
  const colorOptions = ["blue", "black", "red", , "yellow", "pink", "platinum"];
  return (
    <div className="flex flex-wrap   gap-2 mt-2 md:gap-6">
      {colorOptions.map((color, idx) => (
        <div key={idx}>
          <button className="cursor-pointer">
            <div
              className={`h-4 w-4  md:h-6 md:w-6 rounded-full  ${colorClassMap[color]}`}
            ></div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ColorOption;
