"use client";

import { FC } from "react";
import { ButtonVariant } from "@/types/types";
import MainBtn from "@/components/buttons/mainBtn/MainBtn";

type FeatureCardProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonVariant?: ButtonVariant;
  onButtonClick?: () => void;
};

const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  buttonLabel,
  buttonVariant,
  onButtonClick,
}) => {
  return (
    <div
      className="
        bg-white/10
        backdrop-blur-sm
        border border-white/20
        rounded-[29px]
        pt-16 pr-8 pb-16 pl-11
        text-white
        flex flex-col
        justify-between
        shadow-md
      "
    >
      <div>
        <h3 className="text-2xl font-extrabold mb-2 uppercase tracking-wide">
          {title}
        </h3>
        <p className="font-medium text-sm leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <MainBtn variant={buttonVariant ?? "primary"} onClick={onButtonClick}>
          {buttonLabel}
        </MainBtn>

        <div className="ml-4 w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
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
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
