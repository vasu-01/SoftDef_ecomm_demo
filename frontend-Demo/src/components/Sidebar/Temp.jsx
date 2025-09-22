import React from "react";

const Temp = () => {
  return (
    <div className="flex flex-col items-start">
      <button
        onClick={handleSidebar}
        className={`cursor-pointer text-lg font-medium ${
          activeSidebar ? "" : "mt-55 "
        } `}
      >
        {activeSidebar ? <IoClose /> : <IoIosArrowForward />}
      </button>

      <div className="top-1 mt-2">
        {activeSidebar && (
          <div className="px-2 ">
            {/* Hot deal box */}

            <div id="box-1" className="bg-gray-100 p-2 rounded-md mb-2">
              <h1 className="text-md font-semibold mb-5">Hot Deals</h1>
              <div className="flex flex-col items-start text-sm font-medium gap-2.5  ">
                <button
                  onClick={() => setActiveCategory("Nike")}
                  className={`cursor-pointer flex w-full  justify-between  ${
                    activeCategory === "Nike"
                      ? "text-[#40bfff] "
                      : "text-gray-700 "
                  }`}
                >
                  Nike <span>23</span>
                </button>
                <button
                  onClick={() => setActiveCategory("Airmax")}
                  className={`cursor-pointer flex w-full  justify-between  ${
                    activeCategory === "Airmax"
                      ? "text-[#40bfff] "
                      : "text-gray-700 "
                  }`}
                >
                  Airmax <span>23</span>
                </button>
                <button
                  onClick={() => setActiveCategory("Adidas")}
                  className={`cursor-pointer flex w-full  justify-between  ${
                    activeCategory === "Adidas"
                      ? "text-[#40bfff] "
                      : "text-gray-700 "
                  }`}
                >
                  Adidas <span>23</span>
                </button>
                <button
                  onClick={() => setActiveCategory("Air Jordan")}
                  className={`cursor-pointer flex w-full  justify-between  ${
                    activeCategory === "Air Jordan"
                      ? "text-[#40bfff] "
                      : "text-gray-700 "
                  }`}
                >
                  Air Jordan <span>23</span>
                </button>
                <button
                  onClick={() => setActiveCategory("Reebok")}
                  className={`cursor-pointer flex w-full  justify-between  ${
                    activeCategory === "Reebok"
                      ? "text-[#40bfff] "
                      : "text-gray-700 "
                  }`}
                >
                  Reebok <span>26</span>
                </button>
                <button
                  onClick={() => setActiveCategory("Red Tape")}
                  className={`cursor-pointer flex w-full  justify-between  ${
                    activeCategory === "Red Tape"
                      ? "text-[#40bfff] "
                      : "text-gray-700 "
                  }`}
                >
                  Red Tape <span>23</span>
                </button>
              </div>
            </div>

            {/* Price box */}
            <div id="box-2" className="bg-gray-100 p-2 rounded-md mb-2">
              <h1 className="text-md font-semibold mb-5">PRICES</h1>
            </div>

            {/* Color box */}
            <div id="box-3" className="bg-gray-100 p-2 rounded-md mb-2">
              <ColorOption />
            </div>

            {/* Brand box */}
            <div id="box-4" className="bg-gray-100 p-2 rounded-md mb-2">
              <h1 className="text-md font-semibold mb-5">BRAND</h1>
              <div className="flex flex-col items-start text-sm font-medium gap-2.5  ">
                <button
                  onClick={() => setActiveBrand("Nike")}
                  className={`cursor-pointer flex w-full  justify-between  ${
                    activeBrand === "Nike"
                      ? "text-[#40bfff] "
                      : "text-gray-700 "
                  }`}
                >
                  Nike <span>23</span>
                </button>
                <button
                  onClick={() => setActiveBrand("Airmax")}
                  className={`cursor-pointer flex w-full  justify-between  ${
                    activeBrand === "Airmax"
                      ? "text-[#40bfff] "
                      : "text-gray-700 "
                  }`}
                >
                  Airmax <span>23</span>
                </button>
                <button
                  onClick={() => setActiveBrand("Adidas")}
                  className={`cursor-pointer  flex w-full  justify-between  ${
                    activeBrand === "Adidas"
                      ? "text-[#40bfff] "
                      : "text-gray-700 "
                  }`}
                >
                  Adidas <span>23</span>
                </button>
              </div>
            </div>

            {/* More box */}
            <div className="bg-gray-100 p-2 rounded-md mb-2">
              <h1 className="text-center font-semibold text-md">More</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Temp;
