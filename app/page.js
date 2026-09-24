"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white min-h-[44vh]">
        <div className="font-bold text-5xl flex gap-2 justify-center items-center">Buy Me A Chai <span  ><img className="w-25" src="/tea.gif" alt="" /></span></div>
        <p>A Crowd Funding Platform For Creaters, Get Funded By Ur Fans And Followers</p>
        <div className="flex items-center">

          <Link href="/login">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm m-2 px-4 py-2.5 text-center leading-5 cursor-pointer">Start Here!</button>
          </Link>
          <Link href="/about">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 m-2 cursor-pointer">Read More!
            </button>
          </Link>

        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
        hff
      </div>

      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className="text-2xl font-bold text-center mb-14">Your Fans Can Buy You A Chai</h2>
        <div className="flex gap-5 justify-around ">
          <div className="item space-y-3 flex flex-col items-center just">
            <img className="bg-slate-400 rounded-full text-black p-2 w-22" src="man.gif" alt="" />
            <p className="font-bold">Fans Want To Help</p>
            <p className="text-center">Your Fan Are There for U To Help</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center just">
            <img className="bg-slate-400 rounded-full text-black p-2 w-22" src="coin.gif" alt="" />
            <p className="font-bold">Fans Want To Help</p>
            <p className="text-center">Your Fan Are There for U To Help</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center just">
            <img className="bg-slate-400 rounded-full text-black p-2 w-22" src="group.gif" alt="" />
            <p className="font-bold">Fans Want To Help</p>
            <p className="text-center">Your Fan Are There for U To Help</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10">
        hff
      </div>

      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className="text-2xl font-bold text-center my-14">Your Fans Can Buy You A Chai</h2>
        <div className="flex gap-5 justify-around items-center">
          <div className="w-150 h-100 mx-auto">
            <iframe
              src="resume.pdf"
              className="w-full h-full rounded-lg border"
              title="My Resume"
            />
          </div>
        </div>
      </div>
    </>
  );
}
