"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function handleClickOutside(e: MouseEvent) {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  }

  function handleKeyDown(e: Event) {
    const ke = e as KeyboardEvent;
    if (ke.key === "Escape") {
      setOpen(false);
      buttonRef.current?.focus();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <div
      role="none"
      className="relative inline-block"
      ref={menuRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={buttonRef}
        type="button"
        className="
          inline-flex items-center
          text-sm font-medium uppercase
          text-gray-800 
          hover:text-gray-900
        "
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="dropdown-menu"
      >
        {label}
        <svg
          className="ml-1 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.2l3.71-3.97a.75.75 0 111.08 1.04l-4.24 4.53a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
        </svg>
      </button>

      {open && (
        <ul
          id="dropdown-menu"
          aria-label={label}
          className="
            absolute left-0 top-full
            w-48
            bg-pink-600
            text-white
            shadow-lg
            overflow-hidden
            z-50
          "
        >
          {items.map((item) => (
            <li role="none" key={item.href}>
              <Link
                href={item.href}
                role="menuitem"
                className="block px-4 py-2 text-sm hover:bg-pink-700"
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

DropdownMenu.displayName = "DropdownMenu";
export default DropdownMenu;
