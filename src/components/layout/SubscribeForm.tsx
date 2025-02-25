"use client";
import { useState, FormEvent } from "react";
import MainBtn from "../buttons/mainBtn/MainBtn";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
  }

  return (
    <section className="py-8 px-4 bg-white">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-6">
        <h2 className="font-anton text-xl md:text-4xl uppercase text-altBlue text-center md:text-left">
          SUBSCRIBE <br /> FOR UPDATES
        </h2>

        {/* Desktop */}
        <form
          onSubmit={handleSubmit}
          className="hidden md:flex items-center bg-gray-100 rounded-full p-3 pl-5 flex-1"
          noValidate
        >
          <label htmlFor="subscribe-email" className="sr-only">
            Email address for updates
          </label>
          <input
            id="subscribe-email"
            type="email"
            placeholder="Email address*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            className="font-semibold flex-grow bg-transparent outline-none text-sm placeholder-gray-500 text-altBlue pl-2"
          />
          <MainBtn type="submit" variant="gradientOrange" className="text-sm">
            GET TICKETS
          </MainBtn>
        </form>

        {/* Mobile */}
        <form
          onSubmit={handleSubmit}
          className="md:hidden w-full flex flex-col gap-3"
          noValidate
        >
          <div className="bg-gray-100 rounded-full p-3 pl-5">
            <label htmlFor="subscribe-email-mobile" className="sr-only">
              Email address for updates
            </label>
            <input
              id="subscribe-email-mobile"
              type="email"
              placeholder="Email address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="font-semibold w-full bg-transparent outline-none text-sm placeholder-gray-500 text-altBlue pl-2"
            />
          </div>
          <div className="flex justify-center">
            <MainBtn type="submit" variant="gradientOrange" className="text-sm">
              GET TICKETS
            </MainBtn>
          </div>
        </form>
      </div>
    </section>
  );
}
