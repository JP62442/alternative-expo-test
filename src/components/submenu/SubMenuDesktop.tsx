"use client";
import Link from "next/link";
import { subMenuLinks } from "@/data/menudata";

export function SubMenuDesktop() {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-white sm:px-6 lg:px-8">
      <div className="flex items-center space-x-6">
        {subMenuLinks.map((link) => {
          if (link.smooth) {
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(link.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm font-medium hover:text-pink-200"
              >
                {link.label}
              </a>
            );
          }
          return (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-medium hover:text-pink-200"
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
