import { useEffect, useMemo, useState } from "react";
import { products } from "../../DemoData/data";

const FilterBar = ({ onProductsFiltered = () => {} }) => {
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (e) => {
    let value = e.target.value;
    setSortOption(value);

    let sortedProducts = [...products];

    if (value === "Price") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "hotDeals") {
      sortedProducts = products.filter((p) => p.hotDeal === true);
    }

    onProductsFiltered(sortedProducts);
    // console.log(sortedProducts);
  };

  return (
    <div className="flex flex-wrap items-center bg-gray-100 justify-between gap-2 md:gap-4 mb-6 mt-5 rounded-md p-2">
      {/* Right side */}
      <div className="flex flex-wrap items-center gap-1.5 md:gap-5">
        <p className="text-gray-600 text-xs md:text-sm ">13 Items</p>
        <p className="text-gray-600 text-xs md:text-sm">Sort By</p>
        <select
          onChange={handleSortChange}
          value={sortOption}
          className="border cursor-pointer  w-14 h-6  md:w-25 md:h-8 rounded p-1 text-[10px] md:text-sm"
        >
          <option value="Select">Select</option>
          <option value="Price">Price</option>
          <option value="hotDeals">Hot Deals</option>
        </select>

        <p className="text-gray-600 text-xs md:text-sm">Show</p>

        {/* Show count */}
        <select className="border cursor-pointer w-10  md:w-15 h-6 md:h-8 rounded p-1 text-xs md:text-sm">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </div>

      {/* Left side */}

      <div className="md:block hidden">
        <div className="  flex gap-2  ">
          <button className="p-0 md:p-2 cursor-pointer border rounded h-8 w-5 md:h-10 md:w-8">
            <div className="">▦</div>
          </button>
          <button className="p-0 md:p-2 cursor-pointer border rounded  h-8 w-5  md:h-10 md:w-7.5">
            ☰
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
