import React, { useState } from "react";

export const MyDrawer = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  return !isDrawerOpen ? (
    <div>
      <button
        className="relative group"
        onClick={() => setisDrawerOpen(!isDrawerOpen)}
      >
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10" />
            <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75" />
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150" />
            <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
              <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45" />
              <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45" />
            </div>
          </div>
        </div>
      </button>
    </div>
  ) : (
    <div>
      <div>
        <button
          type="submit"
          className="relative group right-0"
          onClick={() => setisDrawerOpen(!isDrawerOpen)}
        >
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10" />
              <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75" />
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150" />
              <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45" />
                <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45" />
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="fixed w-max h-screen top-0 bg-slate-300 p-20">
        Hello world
      </div>
    </div>
  );
};
