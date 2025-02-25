"use client";
import { useRef, useState, useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import CardsSection from "./sections/CardsSection";
import AboutSection from "./sections/AboutSection";
import CategoriesSection from "./sections/CategoriesSection";
import PastWinnersSection from "./sections/PastWinnersSection";

export default function Home() {
  const videoRef = useRef<HTMLDivElement>(null);
  const pastWinnersRef = useRef<HTMLDivElement>(null);
  const [videoHeight, setVideoHeight] = useState(0);

  useEffect(() => {
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

  function scrollToPastWinners() {
    if (pastWinnersRef.current) {
      pastWinnersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="relative">
      <div className="relative z-10">
        <HeroSection />
      </div>
      <div className="relative z-20 -mt-[100px]">
        <div className="absolute top-[100px] inset-0 pointer-events-none shadow-[0_-100px_100px_#10151d]"></div>
        <CardsSection scrollToPastWinners={scrollToPastWinners} />
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
        <div ref={pastWinnersRef}>
          <PastWinnersSection />
        </div>
      </div>
    </div>
  );
}
