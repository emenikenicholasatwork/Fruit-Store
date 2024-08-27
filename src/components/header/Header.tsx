"use client";
import {  BiSearch, BiUser } from "react-icons/bi";
import { FaAlignJustify } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="fixed flex flex-col w-full top-0 z-10 items-center justify-between transition-all shadow-xl">
      <div className="flex flex-row items-center justify-between w-full p-[5%] py-5">
        <div className="text-2xl font-bold tracking-wider">
          <span className="text-[#542a85]">Fruit&nbsp;</span>Store.
        </div>
        <div className="flex flex-row p-1 rounded-lg bg-slate-100 items-center justify-center w-1/2 border border-slate-200 ">
          <BiSearch className="text-2xl text-[#542a85] cursor-pointer hover:scale-110 duration-200" />
          <input
            className="w-full outline-none bg-transparent p-2 text-lg"
            type="text"
          />
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="text-lg hover:text-[#542a85]">
              Home
            </a>
          </li>
          <li>
            <a href="#pome" className="text-lg hover:text-[#542a85]">
              Pome
            </a>
          </li>
          <li>
            <a href="#citrus" className="text-lg hover:text-[#542a85]">
              Citrus
            </a>
          </li>
          <li>
            <a href="#stone" className="text-lg hover:text-[#542a85]">
              Stone
            </a>
          </li>
          <li>
            <a href="#tropical" className="text-lg hover:text-[#542a85]">
              Tropical
            </a>
          </li>
          <li>
            <a href="#berries" className="text-lg hover:text-[#542a85]">
              Berries
            </a>
          </li>
        </ul>
        <div
          id="menu-icon"
          className="text-2xl cursor-pointer ml-6 p-1 rounded md:hidden"
        >
          <FaAlignJustify />
        </div>
        <BiUser className="text-2xl cursor-pointer hover:scale-110 duration-200 hover:text-[#542a85]" />
      </div>
    </header>
  );
};

export default Header;
