"use client";
import { useEffect, useRef, useState } from "react";
import { DropdownProps } from "../types";

export default function Dropdown({
  value,
  setValue,
  options,
  placeholder = "Select...",
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block w-full sm:w-48">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-left text-white"
      >
        {value || placeholder}
      </button>

      <div
        className={`absolute z-20 mt-1 w-full overflow-auto rounded-md bg-gray-800 text-sm text-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
          open
            ? "max-h-60 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="divide-y divide-gray-700">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setValue(option === placeholder ? "" : option);
                setOpen(false);
              }}
              className={`cursor-pointer px-4 py-2 hover:bg-gray-700 ${
                (option === placeholder && value === "") || option === value
                  ? "bg-primary text-white"
                  : ""
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
