"use client";
import { Avatar } from "@mui/material";
import {
  AiOutlineHistory,
  AiOutlineNotification,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";

export const Header = () => {
  return (
    <div className="h-20 bg-gray-800">
      <div className="max-w-6xl m-auto pt-5 flex flex-row justify-between items-center ">
        <div className="flex items-center gap-2 ">
          <Avatar>RR</Avatar>
          <button className="w-32 h-8 rounded text-white hover:bg-gray-700">
            <a href="/">Home</a>
          </button>
          <button className="w-32 h-8 rounded text-white hover:bg-gray-700">
            <a href="/">Movies</a>
          </button>
          <button className="w-32 h-8 rounded text-white hover:bg-gray-700">
            <a href="/">Series</a>
          </button>
        </div>
        <div className="">
          <AiOutlineSearch className="absolute text-white mt-3 ml-3 cursor-text" />

          <input
            className="w-96 h-10 p-4 text-center bg-gray-800 rounded-3xl border border-grey-800 "
            type="text"
            placeholder="Pesquisar aqui"
          />
        </div>
        <div className="flex gap-10  ">
          <div className="h-8 flex w-9 items-center rounded justify-center cursor-pointer text-white hover:bg-gray-700  ">
            <AiOutlineSetting className="w-7 h-5" />
          </div>

          <div className="h-8 flex w-9 items-center rounded justify-center cursor-pointer text-white hover:bg-gray-700   ">
            <AiOutlineNotification className="w-6 h-5" />
          </div>
          <div className="h-8 flex w-9 items-center rounded justify-center cursor-pointer text-white hover:bg-gray-700  ">
            <AiOutlineHistory className="w-6 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
