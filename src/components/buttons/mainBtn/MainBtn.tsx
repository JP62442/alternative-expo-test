"use client";
import React, { ButtonHTMLAttributes, FC, memo } from "react";
import { ButtonVariant } from "@/types/types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @default "primary"
   */
  variant?: ButtonVariant;
  children?: React.ReactNode;
}

const baseStyles = `
  min-w-[174px]
  h-[60px]
  inline-flex items-center justify-center
  rounded-[100px]
  px-4 py-2
  font-semibold
  focus:outline-none
  transition-colors
  disabled:opacity-50
  cursor-pointer
`;

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-altMagenta
    text-white
    hover:bg-altMagentaStrong
    focus:ring-pink-500
  `,
  primaryHover: `
  bg-altMagenta
  text-white
  border border-transparent
  focus:ring-pink-500

  hover:bg-transparent
  hover:text-altMagenta
  hover:border-altMagenta
  focus:ring-pink-500
  `,
  secondary: `
    bg-gray-200 text-gray-800
    hover:bg-gray-300
    focus:ring-gray-400
  `,
  gold: `
    text-white
    bg-gradientGold
  `,
  outline: `
    border-2
    border-gray-300
    text-gray-700
  `,
  gradientOrange: `
    text-white
    bg-gradientOrange
  `,
};

const MainBtn: FC<ButtonProps> = memo(
  ({ variant = "primary", children, className, ...rest }) => {
    const classes = [baseStyles, variantStyles[variant], className]
      .filter(Boolean)
      .join(" ");

    return (
      <button type="button" className={classes} {...rest}>
        {children}
      </button>
    );
  }
);

MainBtn.displayName = "MainBtn";

export default MainBtn;
