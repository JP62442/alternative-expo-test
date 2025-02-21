"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import MainBtn from "../buttons/mainBtn/MainBtn";
import DropdownMenu from "../dropDownMenu/DropDownMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
    sticky top-0 left-0 w-full z-50
    bg-white/80
    backdrop-blur-sm
    shadow-md
  "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://altproexpo.com/wp-content/uploads/2022/08/AltPro_header_logo.svg"
              alt="Alternative Products Expo"
              width={335}
              height={60}
            />
          </Link>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden items-center text-altBlue space-x-6 md:flex">
          <DropdownMenu
            label="OUR SHOWS"
            items={[
              { label: "Medellin 2025", href: "#medellin-2025" },
              { label: "Miami 2025", href: "#miami-2025" },
              { label: "Nashville 2025", href: "#nashville-2025" },
              { label: "Houston 2025", href: "#houston-2025" },
            ]}
          />
          <DropdownMenu
            label="ATTENDEES"
            items={[
              { label: "Why Attend", href: "#medellin-2025" },
              { label: "Buyer Programs", href: "#miami-2025" },
              { label: "Excellence awards", href: "#nashville-2025" },
              { label: "Houston 2025", href: "#houston-2025" },
            ]}
          />
          <Link
            href="#exhibitors"
            className="text-sm font-medium hover:text-gray-900"
          >
            EXHIBITORS
          </Link>
          <Link
            href="#resources"
            className="text-sm font-medium hover:text-gray-900"
          >
            RESOURCES
          </Link>
          <Link href="#register">
            <MainBtn variant="primaryHover">REGISTER</MainBtn>
          </Link>
        </nav>

        {/* Btn menu*/}
        <button
          type="button"
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6 text-altBlue"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden text-altBlue">
          <div className="space-y-2 px-4 pb-3">
            <Link
              href="#our-shows"
              className="block rounded py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Our Shows
            </Link>
            <Link
              href="#attendees"
              className="block rounded py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Attendees
            </Link>
            <Link
              href="#exhibitors"
              className="block rounded py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Exhibitors
            </Link>
            <Link
              href="#resources"
              className="block rounded py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Resources
            </Link>
            <Link
              href="#register"
              className="block w-full rounded bg-pink-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-pink-700"
            >
              Register
            </Link>
          </div>
        </nav>
      )}

      {/* Submenu */}
      <div
        className="
    hidden
    md:block
    border-t border-gray-200
    bg-altMagenta
    opacity-70
    backdrop-blur-[30px]
    backdrop-brightness-[1.15]
  "
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-white sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6">
            <Link
              href="#navigate-page"
              className="text-sm font-medium hover:text-pink-200"
            >
              NAVIGATE THIS PAGE
            </Link>
            <Link
              href="#nominate"
              className="text-sm font-medium hover:text-pink-200"
            >
              NOMINATE
            </Link>
            <Link
              href="#vote"
              className="text-sm font-medium hover:text-pink-200"
            >
              VOTE
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-pink-200"
            >
              ABOUT
            </Link>
            <Link
              href="#categories"
              className="text-sm font-medium hover:text-pink-200"
            >
              CATEGORIES
            </Link>
            <Link
              href="#past-winners"
              className="text-sm font-medium hover:text-pink-200"
            >
              PAST WINNERS
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-pink-200"
            >
              TESTIMONIALS
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
