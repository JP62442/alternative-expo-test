"use client";
import MainBtn from "../buttons/mainBtn/MainBtn";

export default function SubscribeForm() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-6">
        <h2 className="font-bold text-xl md:text-2xl uppercase text-altBlue">
          SUBSCRIBE FOR UPDATES
        </h2>

        <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2">
          <input
            type="email"
            placeholder="Email address*"
            className="
              flex-grow
              bg-transparent
              outline-none
              text-sm
              placeholder-gray-500
            "
          />
          <MainBtn variant="gradientOrange" className="text-sm">
            GET TICKETS
          </MainBtn>
        </div>
      </div>
    </section>
  );
}
