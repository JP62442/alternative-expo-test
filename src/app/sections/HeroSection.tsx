"use client";

import Image from "next/image";
import heroBgDesktop from "../../../public/images/excellenceAwards/hero-image-desktop.png";
import heroBgMobile from "../../../public/images/excellenceAwards/hero-image-mobile.png";
import excellenceAwards from "../../../public/images/excellenceAwards/awards-logo.png";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col">
      <div className="absolute inset-0 md:hidden -z-10">
        <Image
          src={heroBgMobile}
          alt="Hero background mobile"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="absolute inset-0 hidden md:block -z-10">
        <Image
          src={heroBgDesktop}
          alt="Hero background desktop"
          fill
          className="object-cover object-[75%]"
          priority
        />
      </div>

      <div className="absolute top-6 left-6 z-20 md:top-8 md:left-8 hidden md:block">
        <Image
          src={excellenceAwards}
          alt="Alt Pro Expo Excellence Awards"
          width={160}
          height={106}
          priority
        />
      </div>

      <div
        className="flex-1 relative z-10 container mx-auto px-4 flex 
        flex-col 
        justify-start  // Alinea contenido arriba en mobile
        md:justify-center // Centra vertical en desktop
        items-center // Centra horizontal en mobile
        md:items-start // Alinea a la izquierda en desktop
        text-center // Texto centrado en mobile
        md:text-left"
      >
        {" "}
        <div className="mt-20 md:mt-0 md:-mt-16">
          {" "}
          <span
            className="block text-transparent bg-clip-text
            bg-gradientGold
            text-[19px]
            md:text-xl lg:text-[22px]
            font-bold uppercase tracking-[0.25em]
            mb-2
            md:ml-[2px]
          "
          >
            ALT PRO EXPO
          </span>
          <h1
            className="font-anton
            text-[56px]
            md:text-7xl lg:text-[104px]
            font-bold uppercase text-white
            leading-[1]
            md:leading-[1.2]
            mx-auto // Centra el texto en mobile
            md:mx-0 // Quita centrado en desktop
          "
          >
            <span className="block">EXCELLENCE</span>
            <span className="block mt-[2px]">AWARDS</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
