"use client";
import { useState } from "react";
import MainBtn from "../buttons/mainBtn/MainBtn";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");

  function handleSubmit() {
    if (!email.trim()) return;
  }

  return (
    <section className="py-8 px-4 bg-white">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-6">
        <h2 className="font-anton text-xl md:text-4xl uppercase text-altBlue text-center md:text-left">
          SUBSCRIBE <br /> FOR UPDATES
        </h2>

        {/* Desktop */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full p-3 pl-5 flex-1">
          <input
            type="email"
            placeholder="Email address*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="font-semibold flex-grow bg-transparent outline-none text-sm placeholder-gray-500 text-altBlue pl-2"
          />
          <MainBtn
            variant="gradientOrange"
            className="text-sm"
            onClick={handleSubmit}
          >
            GET TICKETS
          </MainBtn>
        </div>

        {/* Mobile */}
        <div className="md:hidden w-full flex flex-col gap-3">
          <div className="bg-gray-100 rounded-full p-3 pl-5">
            <input
              type="email"
              placeholder="Email address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-semibold w-full bg-transparent outline-none text-sm placeholder-gray-500 text-altBlue pl-2"
            />
          </div>
          <div className="flex justify-center">
            <MainBtn
              variant="gradientOrange"
              className="text-sm"
              onClick={handleSubmit}
            >
              GET TICKETS
            </MainBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
