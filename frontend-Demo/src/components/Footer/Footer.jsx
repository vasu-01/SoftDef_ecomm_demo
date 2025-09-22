import React from "react";
import {
  EcommIcon,
  MasterCard,
  Paypal,
  WesternUnion,
} from "../../assets/image.js";
import Pagination from "../Pagination/Pagination.jsx";

const Footer = () => {
  return (
    <footer className="bg-[#bcddfe] ">
      <div className="grid grid-cols-1 gap-7 px-10 py-14 md:p-20 md:py-20 md:grid-cols-3 md:gap-x-20 md:gap-y-20">
        <div id="ecomm" className="">
          <div className="flex items-center gap-2  mb-4 md:gap-3">
            <img src={EcommIcon} alt="" className="h-8 w-8" />
            <h1 className="text-md font-bold md:text-lg">E-Comm</h1>
          </div>
          <div>
            <p className="text-xs text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
        </div>

        <div id="follow">
          <div className="mb-4">
            <h1 className="text-md font-bold md:text-lg">Follow Us</h1>
          </div>
          <div>
            <p className="text-xs text-gray-800">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
          </div>
        </div>
        <div id="contact">
          <div className="mb-4 ">
            <h1 className="text-md font-bold md:text-lg">Contact Us</h1>
          </div>
          <div>
            <p className="text-sm text-gray-800">
              E-Comm , 4578 <br /> Marmora Road, <br /> Glasgow D04 89GR
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 px-10 py-5 md:px-20 md:py-0 md:grid-cols-4 md:gap-x-20 ">
        <div>
          <h1 className="text-md md:text-lg mb-4">Information</h1>
          <div className="text-sm ">
            <h3>About Us</h3>
            <h3>Information</h3>
            <h3>Privacy Policy</h3>
            <h3>Terms & Condition</h3>
          </div>
        </div>

        <div>
          <h1 className="text-md md:text-lg mb-4">Service</h1>
          <div className="text-sm">
            <h3>About Us</h3>
            <h3>Information</h3>
            <h3>Privacy Policy</h3>
            <h3>Terms & Condition</h3>
          </div>
        </div>

        <div>
          <h1 className="text-md md:text-lg mb-4">My Account</h1>
          <div className="text-sm">
            <h3>About Us</h3>
            <h3>Information</h3>
            <h3>Privacy Policy</h3>
            <h3>Terms & Condition</h3>
          </div>
        </div>

        <div>
          <h1 className="text-md md:text-lg mb-4">Our Offers</h1>
          <div className="text-sm">
            <h3>About Us</h3>
            <h3>Information</h3>
            <h3>Privacy Policy</h3>
            <h3>Terms & Condition</h3>
          </div>
        </div>
      </div>

      <div className=" text-center w-full mt-10">
        <hr className="w-[80%] mx-auto text-white" />
      </div>

      <div className="grid grid-cols-2 gap-6 px-8 py-5  md:px-20 md:py-10 md:grid-cols-2 md:gap-x-50 md:gap-y-15">
        <div className="">
          <p className="text-[8px]  md:text-sm text-[#C1C8CE]">
            &copy; 2018 Ecommerce theme by www.bisenbaev.com
          </p>
        </div>
        <div className="flex gap-2 md:gap-4 justify-end">
          <img src={WesternUnion} alt="" className="h-3 w-6 md:h-6 md:w-9" />
          <img src={MasterCard} alt="" className="h-3 w-6 md:h-6 md:w-9" />
          <img src={Paypal} alt="" className="h-3 w-6 md:h-6 md:w-9" />
          {/* <img src="" alt="" /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
