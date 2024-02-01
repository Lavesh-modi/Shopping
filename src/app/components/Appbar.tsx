"use client";

import React from "react";
import SigninButton from "./SigninButton";
import Image from "next/image";
import Link from "next/link";

function Appbar() {
  return (
    <header className="shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] " >
      
      <div className="flex flex-wrap items-center justify-between gap-5 relative">
        <a href="javascript:void(0)">
          <Image
            src="/next.svg"
            width={0}
            height={0}
            alt="Picture of the author"
            className="w-36"
          />
        </a>
        <div className="flex lg:order-1 max-sm:ml-auto">
          <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
            <SigninButton />
          </button>
          <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] ml-3">
            Sign up
          </button>
          <button id="toggle" className="lg:hidden ml-7">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          id="collapseMenu"
          className="lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full"
        >
          <li className="max-lg:border-b max-lg:bg-[#007bff] max-lg:py-2 px-3 max-lg:rounded">
          <Link
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                href="/"
              >
                Home
              </Link>
          </li>
          <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
          <Link
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                href="/profile"
              >
               Profile
              </Link>
          </li>
          <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
          <Link
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                href="/produts"
              >
                Product
              </Link>
          </li>
          <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
           

            <li>
              <Link
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                href="/about"
              >
                About Us
              </Link>
            </li>
          </li>
          <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
          <Link
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                href="/blog"
              >
              Blog
              </Link>
          </li>
          <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
            <a
              href="javascript:void(0)"
              className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Appbar;
