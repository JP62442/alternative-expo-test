"use client";
import { useState } from "react";
import Link from "next/link";
import { subMenuLinks } from "@/data/menudata";

export function SubMenuMobile() {
  const [isSubmenuExpanded, setIsSubmenuExpanded] = useState(false);
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-2 text-white sm:px-6 lg:px-8">
      <button
        onClick={() => setIsSubmenuExpanded(!isSubmenuExpanded)}
        className="w-full text-left text-sm font-medium"
      >
        {subMenuLinks[0].label}
      </button>
      {isSubmenuExpanded && (
        <div className="mt-2 flex flex-col space-y-2 w-full">
          {subMenuLinks.slice(1).map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsSubmenuExpanded(false)}
              className="text-sm font-medium hover:text-pink-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
