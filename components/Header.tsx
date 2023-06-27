"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header className="">
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10">
        <Image
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
          src="https://links.papareact.com/c2cdd5"
          alt="trello logo"
          width={300}
          height={100}
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full ">
          <form className="flex items-center space-x-5 bg-white rounded-md shadow-md p-2 flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 " />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 outline-none p-2 "
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          <Avatar name="Jawad Makary" round color="#0055d1" size="50" />
        </div>
      </div>
      <div className="flex justify-center items-center px-5 md:py-5">
        <p className="flex items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1] p-5">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#0055d1] mr-1" />
          GPT is summarising your tasks for the day
        </p>
      </div>
    </header>
  );
}

export default Header;
