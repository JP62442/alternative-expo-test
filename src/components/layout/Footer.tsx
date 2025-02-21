"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2B2B2B] text-white">
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        {/* Main container in 3 columns for desktop */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="md:w-1/3 content-center flex flex-col justify-center items-center">
            <Link href="/">
              <Image
                src="https://altproexpo.com/wp-content/uploads/2021/08/AltPro_footer_logo.svg"
                alt="Alternative Products Expo"
                width={250}
                height={40}
                priority
              />
            </Link>

            <div className="mt-4 flex items-center  space-x-4">
              <Link
                href="https://www.instagram.com/altproexpo/"
                aria-label="Altproexpo on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-6 w-6" />
              </Link>

              <Link
                href="https://www.facebook.com/Alternative-Products-Expo-113197687701841"
                aria-label="Altproexpo on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="h-6 w-6" />
              </Link>

              <Link
                href="https://www.linkedin.com/company/altproexpo"
                aria-label="Altproexpo on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="h-6 w-6" />
              </Link>

              <Link
                href="https://www.youtube.com/channel/UCWGlDv5teIOp-CQ4WvNUalA"
                aria-label="Altproexpo on YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="md:w-1/3 text-center md:text-center content-center">
            <div className="flex flex-col space-y-2 text-sm md:items-center">
              <Link
                href="#privacy-policy"
                className="footer-link hover:text-gray-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms-conditions"
                className="footer-link hover:text-gray-300"
              >
                Terms & Conditions (Attendees / Exhibitors)
              </Link>
              <Link href="#notice" className="footer-link hover:text-gray-300">
                Notice of Filming & Photography
              </Link>
            </div>

            <div className="mt-4 text-sm">
              <p>2022–{currentYear} ALTERNATIVE PRODUCTS EXPO, ZJ EVENTS LLC</p>
              <p>All Rights Reserved</p>
            </div>
          </div>

          <div className="md:w-1/3 text-xs text-gray-300 leading-5 md:text-left content-center">
            <p>
              DISCLAIMER: DISCLAIMER: Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
