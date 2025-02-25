"use client";

import { useState } from "react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  href: string;
}

interface MobileDropdownMenuProps {
  label: string;
  items: DropdownItem[];
}

const MobileDropdownMenu: React.FC<MobileDropdownMenuProps> = ({
  label,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20">
      <button
        type="button"
        className="w-full flex justify-between items-center py-3 px-4 text-white text-lg font-bold uppercase"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {label}
        <svg
          className={`h-5 w-5 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.2l3.71-3.97a.75.75 0 111.08 1.04l-4.24 4.53a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
        </svg>
      </button>

      {isOpen && (
        <ul className="bg-transparent text-white">
          {items.map((item) => (
            <li key={item.href} className="border-t border-white/10">
              <Link
                href={item.href}
                className="block px-6 py-3 text-sm hover:bg-pink-700"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileDropdownMenu;
