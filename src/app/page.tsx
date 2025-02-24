"use client";
import { useRef, useState, useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import CardsSection from "./sections/CardsSection";
import AboutSection from "./sections/AboutSection";
import CategoriesSection from "./sections/CategoriesSection";
import PastWinnersSection from "./sections/PastWinnersSection";

export default function Home() {
  const videoRef = useRef<HTMLDivElement>(null);
  const [videoHeight, setVideoHeight] = useState(0);

  useEffect(() => {
    // Function to measure the video container’s height
    function updateHeight() {
      if (videoRef.current) {
        setVideoHeight(videoRef.current.offsetHeight);
      }
    }

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div className="relative">
      <div className="relative z-10">
        <HeroSection />
      </div>
      <div className="relative z-20 -mt-[100px]">
        <CardsSection />
      </div>

      <AboutSection videoRef={videoRef} />

      <div
        id="sec-bg"
        className="
          relative
          bg-[url('/images/general/sec-bg.png')]
          bg-no-repeat
          bg-cover
          bg-top
        "
      >
        <CategoriesSection halfVideoHeight={videoHeight / 2} />
        <PastWinnersSection />
      </div>
    </div>
  );
}
