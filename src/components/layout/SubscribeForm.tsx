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
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-6">
        <h2 className="font-bold text-xl md:text-2xl uppercase text-altBlue">
          SUBSCRIBE FOR UPDATES
        </h2>
        <div className="flex-1 flex items-center bg-gray-100 rounded-full p-3 pl-5">
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
      </div>
    </section>
  );
}
