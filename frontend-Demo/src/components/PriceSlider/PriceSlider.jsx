import React, { Children, useState } from "react";
import { Range } from "react-range";

const PriceSlider = ({ min = 0, max = 1000, step = 10, onChange }) => {
  const [value, setValue] = useState([min, max]);

  const handleChange = (values) => {
    setValue(values);
    onChange?.(values);
  };
  return (
    <div className="p-2 mb-5 w-full">
      <div className="flex justify-between items-center mb-7 md:mb-10 text-sm">
        <span className="font-medium">Range:</span>
        <span className="text-gray-600">
          ${value[0].toFixed(2)} - ${value[1].toFixed(2)}
        </span>
      </div>

      <Range
        step={step}
        min={min}
        max={max}
        values={value}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-2 w-full bg-gray-200 rounded"
            style={{ ...props.style }}
          >
            <div
              className="h-2 bg-blue-500 rounded"
              style={{
                marginLeft: `${((value[0] - min) / (max - min)) * 100}%`,
                width: `${((value[1] - value[0]) / (max - min)) * 100}%`,
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="h-4 w-4 bg-blue-500 rounded-full border-2 border-white shadow"
          />
        )}
      />
    </div>
  );
};

export default PriceSlider;
