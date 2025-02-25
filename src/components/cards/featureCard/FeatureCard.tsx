"use client";

import { FC } from "react";
import { ButtonVariant } from "@/types/types";
import MainBtn from "@/components/buttons/mainBtn/MainBtn";

type FeatureCardProps = {
  id?: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonVariant?: ButtonVariant;
  onClick?: () => void;
  showArrow?: boolean;
};

const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  buttonLabel,
  buttonVariant,
  onClick,
  showArrow = true,
  id,
}) => {
  return (
    <div
      id={id}
      className="
        bg-white/5
        backdrop-blur-lg
        border border-white/15
        rounded-[24px]
        p-8 md:p-12
        text-white
        flex flex-col
        justify-between
        shadow-xl
        transition-transform duration-300 hover:scale-[1.02]
        relative
      "
    >
      <div>
        <h2 className="text-2xl font-extrabold mb-3 uppercase tracking-wide">
          {title}
        </h2>
        <p className="font-medium text-sm leading-relaxed opacity-80">
          {description}
        </p>
      </div>

      <div className="mt-6">
        <MainBtn variant={buttonVariant ?? "primary"} onClick={onClick}>
          {buttonLabel}
        </MainBtn>
      </div>

      {showArrow && (
        <button
          className="absolute bottom-4 right-4 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/70 hover:text-black"
          onClick={onClick}
          aria-label="Arrow Button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white transition-all duration-300 hover:text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default FeatureCard;
