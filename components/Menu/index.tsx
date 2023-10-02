"use client";

import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useOnClickOutside } from "usehooks-ts";
import Hamburger from "../hamburger";
import { navData } from "../Nav/nav.data";
import Link from "next/link";
import dynamic from "next/dynamic";
const ScrollLink = dynamic(() => import("../ScrollLink"), { ssr: false });

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => {
    setMenuOpen(false);
  });

  useLockBodyScroll(menuOpen);

  return (
    <div className="relative z-20 overflow-hidden ">
      <button
        className="relative flex items-center group mt-2"
        onClick={() => setMenuOpen(true)}
      >
        <Hamburger menuOpen={menuOpen} />
      </button>
      {createPortal(
        <>
          <div
            className={`fixed h-screen w-full overflow-hidden top-0 right-0 bottom-0 left-0 bg-black/[0.25] ${
              menuOpen ? `opacity-100` : `opacity-0 hidden`
            } delay-200 transition-all duration-300 ease-in-out`}
          ></div>
          <aside
            ref={menuRef}
            className={`fixed bg-shader bg-gray-900 top-0 right-0 bottom-0 w-full h-screen z-20 ${
              menuOpen ? `translate-x-0` : `translate-x-[100%]`
            } transition-transform delay-300 duration-300 ease-in-out `}
          >
            <div className="w-full h-full  bg-green-2/80 flex flex-col px-[1.5rem] py-[1.875rem] ">
              <div className="w-full flex justify-end pb-[1.875rem] ">
                <button
                  className="fixed top-0 flex items-center group mt-[calc(0.5rem+2.5rem)]"
                  onClick={() => setMenuOpen(false)}
                >
                  <Hamburger menuOpen={menuOpen} />
                </button>
              </div>
              <div className="flex-grow flex flex-col justify-center items-center text-white-3/[0.66] py-[2.5rem] gap-8 overflow-y-auto overflow-x-hidden">
                {navData?.map((i, idx) =>
                  i?.section ? (
                    <ScrollLink
                      onClick={() => setMenuOpen(false)}
                      key={idx}
                      className="hover:text-white-3 cursor-pointer transition-colors duration-300 ease-in-out group text-3xl "
                      label={i?.title}
                      link={i?.link}
                    />
                  ) : (
                    <Link
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-white-3 transition-colors duration-300 ease-in-out group text-3xl"
                      href={i?.link}
                      target={`_blank`}
                      key={idx}
                    >
                      {i?.title}
                    </Link>
                  )
                )}
              </div>
            </div>
          </aside>
        </>,
        document.body
      )}
    </div>
  );
};

export default Menu;
