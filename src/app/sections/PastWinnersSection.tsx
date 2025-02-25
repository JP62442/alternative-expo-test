"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MainBtn from "@/components/buttons/mainBtn/MainBtn";
import { useWinners } from "@/hooks/useWinners";
import Link from "next/link";

export default function PastWinnersSection() {
  const winnersData = useWinners();
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState<number>(0);

  useEffect(() => {
    if (winnersData.length > 0) {
      setOpenIndex(0);
      setCurrentCategoryIndex(0);
    }
  }, [winnersData]);

  if (winnersData.length === 0) {
    return <p className="text-white text-center">Whitout data now.</p>;
  }

  function handleToggle(index: number) {
    setOpenIndex(index);
    setCurrentCategoryIndex(0);
  }

  function handleNextCategory() {
    setCurrentCategoryIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < winnersData[openIndex].categories.length
        ? nextIndex
        : 0;
    });
  }

  const currentCategory =
    winnersData[openIndex].categories[currentCategoryIndex];

  return (
    <section className="text-white py-16 px-4">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-anton text-3xl md:text-4xl font-bold uppercase text-white">
          PAST WINNERS
        </h2>

        <div className="flex items-center justify-center mt-2">
          <div className="h-[2px] w-16 bg-gradientGold" />
          <span className="inline-block mx-2 text-transparent bg-clip-text bg-gradientGold text-lg md:text-xl font-bold uppercase">
            {winnersData[openIndex].event_name}
          </span>
          <div className="h-[2px] w-16 bg-gradientGold" />
        </div>
      </div>

      {/* Winner Card */}
      <div className="mx-auto max-w-5xl mt-12 p-[14px] bg-white/10 backdrop-blur-sm rounded-[25px] flex flex-col md:flex-row items-center gap-16 bg-[url('/images/general/pinksmoke-bg.png')] bg-no-repeat bg-cover bg-center relative">
        <div className="w-full md:w-1/2 flex justify-center relative">
          <Image
            src={currentCategory.image_url ?? "/images/companies/vapes.png"}
            alt={currentCategory.winner_name}
            width={500}
            height={300}
            className="rounded-[25px] object-cover w-[500px] h-[300px]"
          />

          <div className="absolute top-[-10%] md:top-[20%] md:left-[90%] lg:left-[90%] w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center shadow-lg">
            <Image
              src={currentCategory.logo_url ?? "/images/companies/lost8s.png"}
              alt={`${currentCategory.winner_name} Logo`}
              width={100}
              height={100}
              className="rounded-full object-contain w-[70px] h-[70px]"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-black uppercase leading-tight">
            {currentCategory.category_name}
          </h3>
          <p className="font-medium text-xl mt-2">
            {currentCategory.winner_name}
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link
              scroll={false}
              target="_blank"
              href={currentCategory.product_url ?? "#"}
            >
              <MainBtn variant="gold">VIEW WINNER</MainBtn>
            </Link>
            <MainBtn
              className="text-white"
              variant="outline"
              onClick={handleNextCategory}
            >
              SEE NEXT CATEGORY
            </MainBtn>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl mt-12 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          {winnersData.map((event, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={event.event_name + event.year}
                onClick={() => handleToggle(index)}
                className={`font-extrabold h-[60px] w-full mb-2 p-4 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                  isOpen ? "bg-[#A89E51]" : ""
                }`}
                style={
                  !isOpen
                    ? {
                        background:
                          "linear-gradient(to right, #4c2142, #522747, #572d4c, #5d3352, #633957)",
                      }
                    : {}
                }
              >
                <span className=" uppercase">
                  {event.event_name + " " + event.year}
                </span>
                <span className="text-2xl">{isOpen ? "-" : "+"}</span>
              </button>
            );
          })}
        </div>

        <div className="w-full md:w-2/3">
          {openIndex != null && (
            <div className="space-y-2">
              {winnersData[openIndex].categories.map((cat, index) => (
                <div
                  key={cat.category_name + cat.winner_name}
                  className={`grid grid-cols-2 items-center text-center gap-x-4 text-sm md:text-base p-2 rounded ${
                    index === currentCategoryIndex ? "bg-white/5" : ""
                  }`}
                >
                  <span className="font-extrabold text-end">
                    {cat.category_name}
                  </span>
                  <span className="font-medium text-start">
                    {cat.winner_name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
