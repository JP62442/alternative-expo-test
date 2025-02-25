"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import MainBtn from "../buttons/mainBtn/MainBtn";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import MobileDropdownMenu from "../dropdownMenu/MobileDropdownMenu";
import { menuData } from "@/data/menudata";
import { SubMenuDesktop } from "../submenu/SubMenuDesktop";
import { SubMenuMobile } from "../submenu/SubMenuMobile";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white/80 shadow-md">
      {!isOpen && (
        <div className="mx-auto flex max-w-7xl items-center justify-between backdrop-blur-sm px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/general/alt-pro-expo_dark.svg"
                alt="Alternative Products Expo"
                width={240}
                height={50}
                className="min-w-[200px] min-h-[40px]"
              />
            </Link>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden items-center text-altBlue space-x-6 lg:flex">
            {menuData.map((menu) => (
              <DropdownMenu
                key={menu.label}
                label={menu.label}
                items={menu.items}
              />
            ))}

            <Link href="/register">
              <MainBtn variant="primaryHover">REGISTER</MainBtn>
            </Link>
          </nav>

          {/* Btn menu*/}
          <button
            type="button"
            className="block lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            title={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="h-6 w-6 text-altBlue"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      )}

      {/* Menu mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xl">
          <div className="absolute top-0 left-0 w-full h-screen text-white shadow-lg overflow-y-auto">
            <div className="flex justify-between items-center px-4 py-3 border-b border-white/20">
              <Image
                src="/images/general/alt-pro-expo_white.svg"
                alt="Alternative Products Expo"
                width={240}
                height={50}
              />
              <button onClick={() => setIsOpen(false)}>
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="pt-4">
              {menuData.map((menu) => (
                <MobileDropdownMenu
                  key={menu.label}
                  label={menu.label}
                  items={menu.items}
                />
              ))}
            </nav>

            <div className="p-4">
              <Link href="/register">
                <MainBtn variant="primaryHover">REGISTER</MainBtn>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="relative hidden md:block border-t border-gray-200 bg-altMagenta -z-10">
        <SubMenuDesktop />
      </div>
      <div className="relative md:hidden border-t border-gray-200 bg-altMagenta">
        <SubMenuMobile />
      </div>
    </header>
  );
}
