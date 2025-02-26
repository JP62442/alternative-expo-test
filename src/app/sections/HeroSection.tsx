"use client";

import Image from "next/image";
import heroBgDesktop from "../../../public/images/excellenceAwards/hero-image-desktop.png";
import heroBgMobile from "../../../public/images/excellenceAwards/hero-image-mobile.png";
import excellenceAwards from "../../../public/images/excellenceAwards/awards-logo.png";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col">
      <div className="absolute inset-0 md:hidden -z-10 min-h-[600px]">
        <Image
          src={heroBgMobile}
          alt="Hero background mobile"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="absolute inset-0 hidden md:block -z-10 min-h-[800px]">
        <Image
          src={heroBgDesktop}
          alt="Hero background desktop"
          fill
          className="object-cover object-[75%]"
          priority
        />
      </div>

      <div className="w-[120px] md:w-[160px] absolute top-6 left-6 z-20 md:top-8 md:left-8 block">
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
        justify-start
        md:justify-center
        items-center
        md:items-start
        text-center
        md:text-left"
      >
        <div className="mt-36 md:mt-0 md:-mt-16 xl:ml-40">
          <Image
            src={"images/general/Trazado-5657.svg"}
            alt="Excellence Awards"
            width={250}
            height={250}
            className="mb-2"
          />
          <h1
            className="font-anton
            text-[56px]
            md:text-8xl xl:text-[120px]
            font-bold uppercase text-white
            leading-[1]
            md:leading-[1.2]
            mx-auto
            md:mx-0
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
