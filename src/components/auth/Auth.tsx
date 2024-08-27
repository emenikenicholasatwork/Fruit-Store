import React from "react";
import { BiLockAlt, BiX } from "react-icons/bi";
import { CiMail } from "react-icons/ci";

const Auth = () => {
  return (
    <div className="fixed flex items-center justify-center w-full h-screen bg-[rgb(0,0,0,.5)]">
      <div className="bg-white w-[700px] h-[50%] rounded-lg px-[2%] py-3">
        <div className="flex flex-row items-center justify-between gap-2">
          <div>
            <p className="font-bold font-serif text-2xl text-[#542a85] tracking-wider">
              Login
            </p>
            <p className="">
              Kindly input your authentication detials to be authenticated
            </p>
          </div>
          <BiX className="text-2xl cursor-pointer" />
        </div>
        <form className="flex flex-col gap-3 mt-7 ">
          <div className="flex flex-row items-center w-full bg-slate-100 space-x-2 p-4 rounded-lg">
            <CiMail className="text-[#542a85] text-4xl" />
            <input
              type="email"
              className="outline-none bg-transparent text-lg w-full"
              placeholder="abc....@gmail.com"
            />
          </div>
          <div className="flex flex-row items-center w-full bg-slate-100 space-x-2 p-4 rounded-lg">
            <BiLockAlt className="text-[#542a85] text-4xl" />
            <input
              type="password"
              className="outline-none bg-transparent text-lg w-full"
              placeholder="**************************"
            />
          </div>
          <button
            type="submit"
            className="bg-[#542a85] text-white text-lg p-5 rounded-lg w-1/2 hover:scale-105 duration-200"
          >
            Submit
          </button>
        </form>
        <p className="mt-3 text-center text-xl">OR</p>
        <div></div>
      </div>
    </div>
  );
};

export default Auth;
