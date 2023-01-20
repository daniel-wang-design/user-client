import {useState} from 'react';
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";


const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div 
      className={`bg-grey h-screen p-5 pt-8 rounded-r-lg
      ${open ? "w-[9%]" : "w-[15%]"} duration-300 relative`}
      >
        <BsArrowLeftShort 
        className={`bg-blue text-grey text-3xl rounded-full 
        absolute -right-3 top-9 border border-grey 
        cursor-pointer 
        ${!open && "rotate-180"
        }`} 
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex">
        <AiFillEnvironment className={`bg-amber-300 text-4xl 
        rounded cursor-pointer float-left duration-500 lg:mr-[25%] sm:mr-[40%] md:mr-[30%]
        hidden md:lg:block
        ${open && "rotate-[360deg]"}`} />
      </div>
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold"> Home Page</h1>
      </div>
    </div>
  );
};

export default App;
