import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full  border-r-2 border-zinc-400 px-10 py-8">
      <h1 className="text-2xl text-[white] font-bold">
        <i className="text-[#6556cd]  ri-tv-fill mr-2"></i>
        <span className="text-2xl">SCSDB.</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <h1 className="text-white font-semibold text-xl mt-8 mb-2">
          New Feeds
        </h1>
        <Link className="hover:bg-[#5665cd] hover:text-[white] duration-300 rounded-lg p-4">
          <i className="ri-fire-fill mr-2"></i>
          Trending
        </Link>
        <Link className="hover:bg-[#5665cd] hover:text-[white] duration-300 rounded-lg p-4">
          <i className="ri-bard-fill mr-2"></i>
          Popular
        </Link>
        <Link className="hover:bg-[#5665cd] hover:text-[white] duration-300 rounded-lg p-4">
          <i className="ri-movie-2-fill mr-2"></i>
          Movies
        </Link>
        <Link className="hover:bg-[#5665cd] hover:text-[white] duration-300 rounded-lg p-4">
          <i className="ri-tv-2-fill mr-2"></i>
          Tv Shows
        </Link>
        <Link className="hover:bg-[#5665cd] hover:text-[white] duration-300 rounded-lg p-4">
          <i className="ri-team-fill mr-2"></i>
          People
        </Link>
      </nav>
      
      <hr className="mt-6 border-none h-[1px] bg-zinc-400"/>
      
      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <h1 className="text-white font-semibold text-xl mt-8 mb-2">
          Information
        </h1>
        <Link className="hover:bg-[#5665cd] hover:text-[white] duration-300 rounded-lg p-4">
        <i className="ri-information-fill mr-2"></i>
          About
        </Link>
        <Link className="hover:bg-[#5665cd] hover:text-[white] duration-300 rounded-lg p-4">
        <i className="ri-phone-fill mr-2"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
