import React, { useState } from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { EcommIcon } from "../../assets/image.js";

const Navbar = () => {
  const [hambergerActive, setHambergerActive] = useState(false);
  const [linkActive, setLinkActive] = useState("HOME");

  const menuItems = ["HOME", "BAG", "SNEAKERS", "BELT", "CONTACT"];

  const handleBurger = () => {
    setHambergerActive((prev) => !prev);
  };
  // console.log(linkActive.item);
  return (
    <div>
      <div className="w-full shadow px-3 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo and Cart */}
          <div className="flex items-center">
            <img src={EcommIcon} alt="E-Comm" className="h-8 w-8 mr-3" />
            <h1 className="text-lg mr-4 font-semibold">E-Comm</h1>
          </div>

          {/* Hamburger (mobile only) */}
          <div className="relative md:hidden">
            <button
              onClick={handleBurger}
              className="p-2 "
              aria-label="Toggle navigation"
            >
              <GiHamburgerMenu size={22} />
            </button>

            {hambergerActive && (
              <div className="absolute  font-medium  top-full  right-0 mt-2 cursor-pointer bg-white shadow-lg rounded-lg flex flex-col w-30 py-2 ">
                {menuItems.map((item, idx) => (
                  <a
                    className={`px-4 py-2 hover:bg-gray-100 ${
                      linkActive === item ? "text-[#40bfff] " : "text-gray-700 "
                    }`}
                    onClick={() => setLinkActive(item)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Links (desktop) */}
          <div className="hidden font-medium cursor-pointer md:flex md:justify-between items-center md:gap-8 lg:gap-25 ">
            {menuItems.map((item, idx) => (
              <a
                className={`${
                  linkActive === item ? "text-[#40bfff] " : "text-gray-700 "
                }`}
                onClick={() => setLinkActive(item)}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Cart */}
          <div className=" hidden items-center text-base md:flex lg:gap-3">
            <PiShoppingCartSimpleBold className="h-6 w-6 mr-2" />
            <h3 className="mr-2">Items</h3>
            <h3 className="text-gray-500">$0.00</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
