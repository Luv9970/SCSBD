import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setquery] = useState("");

  console.log(query)

  return (
    <div className="w-full h-[10vh] relative flex items-center justify-start pl-[15%]">
      <i className="text-2xl text-zinc-400 ri-search-line "></i>
      <input
        onChange={(e) => {
          setquery(e.target.value);
        }}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-3 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />

      {(query.length > 0) && <i onClick={()=> setquery("")} className="text-2xl text-zinc-400 ri-close-fill cursor-pointer"></i>}
      

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded">
        {/* <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-6 flex items-start justify-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link> */}
       
      </div>
    </div>
  );
};

export default Topnav;
