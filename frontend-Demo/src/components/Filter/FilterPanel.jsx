// -------------------------------------------------

import React from "react";
import ColorOption from "../ui/ColorOption";
import PriceSlider from "../PriceSlider/PriceSlider";
import { products } from "../../DemoData/data.js";

const FilterPanel = ({
  isMobile = false,
  onClose = () => {},
  activeCategory,
  setActiveCategory,
  activeBrand,
  setActiveBrand,
  showHotDeals,
  setShowHotDeals,
}) => {
  // console.log("activeCategory: ", activeCategory);

  // Count products per brand
  const brandCount = products.reduce((acc, product) => {
    if (product.isBrand) {
      acc[product.brand] = (acc[product.brand] || 0) + 1;
    }
    return acc;
  }, {});
  // console.log("countBrand: ", brandCount);

  // Count hot deal products per brand
  const hotDealProductCount = products.reduce((acc, product) => {
    if (product.isHot) {
      acc[product.brand] = (acc[product.brand] || 0) + 1;
    }
    return acc;
  }, {});
  // console.log("hotDealProductCount: ", hotDealProductCount);

  return (
    <div className="flex flex-col items-start">
      {isMobile && (
        <div className="mb-2">
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>
      )}

      {/* Hot Deals */}
      <div className="bg-gray-100 p-4 rounded-md mb-6 w-full md:w-[90%]">
        <h1 className="text-md font-semibold mb-10 lg:mb-8">Hot Deals</h1>
        <div className="flex flex-col items-start text-sm gap-8  lg:gap-5">
          {Object.entries(hotDealProductCount).map(([brand, count]) => (
            <button
              key={brand}
              onClick={() => {
                setActiveBrand(brand);
                setShowHotDeals(true);
                if (isMobile) onClose();
              }}
              className={`cursor-pointer flex w-full justify-between ${
                activeBrand === brand && showHotDeals
                  ? "text-[#40bfff]"
                  : "text-gray-700"
              }`}
            >
              {brand} <span>{count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="bg-gray-100 p-0 rounded-md mb-6 w-full md:w-[90%]">
        <h1 className="text-md p-4 font-semibold mb-5 lg:mb-2">PRICES</h1>
        <PriceSlider />
      </div>

      {/* Color */}
      <div className="bg-gray-100 p-4 rounded-md mb-6 w-full md:w-[90%]">
        <h1 className="text-md font-semibold mb-10 lg:mb-8">COLOR</h1>
        <ColorOption />
      </div>

      {/* Brand */}
      <div className="bg-gray-100 p-4 rounded-md mb-6 w-full md:w-[90%]">
        <h1 className="text-md font-semibold mb-10 lg:mb-8">BRAND</h1>
        <div className="flex flex-col items-start text-sm gap-8  lg:gap-5">
          {Object.entries(brandCount).map(([brand, count]) => (
            <button
              key={brand}
              onClick={() => {
                setActiveBrand(brand);
                setShowHotDeals(false); // reset hot deals filter
                if (isMobile) onClose();
              }}
              className={`cursor-pointer flex w-full justify-between ${
                activeBrand === brand ? "text-[#40bfff]" : "text-gray-700"
              }`}
            >
              {brand} <span>{count}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-md mb-2 w-full md:w-[90%]">
        <h1 className="text-md text-center font-semibold">More</h1>
      </div>
    </div>
  );
};

export default FilterPanel;
