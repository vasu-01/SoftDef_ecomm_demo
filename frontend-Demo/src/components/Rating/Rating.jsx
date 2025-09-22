import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex text-amber-300 gap-x-3">
      {stars.map((star, idx) => {
        if (value >= star) {
          return <FaStar key={idx} />;
        } else if (value >= star - 0.5) {
          return <FaStarHalfAlt key={idx} />;
        } else {
          return <FaRegStar key={idx} />;
        }
      })}
    </div>
  );
};

export default Rating;
