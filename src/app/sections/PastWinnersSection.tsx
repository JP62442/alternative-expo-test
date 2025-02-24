"use client";

import { useState } from "react";
import Image from "next/image";
import MainBtn from "@/components/buttons/mainBtn/MainBtn";
import { eventsData } from "@/data/PastWinners";

export default function PastWinnersSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function handleToggle(index: number) {
    setOpenIndex(index);
  }

  return (
    <section className="text-white py-16 px-4">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-anton text-3xl md:text-4xl font-bold uppercase text-white">
          PAST WINNERS
        </h2>

        <div className="flex items-center justify-center mt-2">
          <div className="h-[2px] w-16 bg-gradientGold" />
          <span
            className="
              inline-block
              mx-2
              text-transparent
              bg-clip-text
              bg-gradientGold
              text-lg
              md:text-xl
              font-bold
              uppercase
            "
          >
            HOUSTON 2024
          </span>
          <div className="h-[2px] w-16 bg-gradientGold" />
        </div>
      </div>

      <div
        className="
          mx-auto max-w-5xl
          mt-12
          p-6
          bg-white/10
          backdrop-blur-sm
          rounded-[25px]
          flex
          flex-col
          md:flex-row
          items-center
          gap-8
          bg-[url('/images/general/pinksmoke-bg.png')]
          bg-no-repeat
          bg-cover
          bg-center
        "
      >
        <div className="w-full md:w-1/2">
          <Image
            src="/images/dataimage.png"
            alt="Data product"
            width={500}
            height={300}
            className="rounded-md object-cover w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-extra-bold uppercase leading-tight">
            BEST <br />
            ALTERNATIVE <br />
            PRODUCT
          </h3>
          <p className="text-xl mt-2">Data</p>

          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <MainBtn variant="gold">VIEW WINNER</MainBtn>
            <MainBtn className="text-white" variant="outline">
              SEE NEXT CATEGORY
            </MainBtn>
          </div>
        </div>
      </div>

      {/* Events Accordion */}
      <div className="mx-auto max-w-5xl mt-12 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          {eventsData.map((event, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={event.name}
                onClick={() => handleToggle(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleToggle(index);
                  }
                }}
                className={`
                  h-[60px]
                  w-full
                  mb-2 p-4 rounded-lg
                  flex items-center justify-between
                  cursor-pointer
                  transition-colors
                  ${isOpen ? "bg-[#A89E51]" : "bg-white/10 bg-opacity-10"}
                `}
              >
                <span className="font-bold uppercase">{event.name}</span>
                <span className="text-2xl font-bold">{isOpen ? "-" : "+"}</span>
              </button>
            );
          })}
        </div>

        <div className="w-full md:w-2/3">
          {openIndex != null && (
            <div className="space-y-2">
              {eventsData[openIndex].categories.map((cat) => (
                <div
                  key={cat.categoryName}
                  className="
                    grid
                    grid-cols-2
                    items-center
                    text-center
                    gap-x-4
                    text-sm
                    md:text-base
                    p-2
                    rounded
                  "
                >
                  <span className="font-semibold text-end">
                    {cat.categoryName}
                  </span>
                  <span className="text-start">{cat.winner}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
