import { useState, useRef, useEffect, forwardRef } from "react";
import { Icon } from "../Icon";
import classNames from "classnames";
import type { SelectProps } from "./types";

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    { 
      placeholder = "Select an option",
      options = [],
      onSelect,
      value,
      fullWidth,
      size = "medium", // ✅ Default to "medium"
      isDisabled = false,
        },
    ref
  ) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement | null>(null);

    // ✅ Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
          setDropdownOpen(false);
        }
      };

      if (dropdownOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownOpen]);

    const sizeClasses = {
      small: "px-3 py-1.5 input-type-sm",
      medium: "p-2 input-type-base",
      large: "p-3 input-type-base",
    };

    return (
      <div className={classNames("relative", { "w-full": fullWidth })} ref={selectRef}>
        {/* ✅ Select Input */}
        <div
          className={classNames(
            "relative flex w-full items-center justify-between cursor-pointer select",
            "focus:border-blue focus:ring-2 focus:ring-blue-500",
            "hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",
            "placeholder-text-grey-500",

            sizeClasses[size],
          )}
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          <span className="truncate">{value || placeholder}</span>
          <Icon name={dropdownOpen ? "chevronUp" : "chevronDown"} size="small" />
        </div>

        {/* ✅ Dropdown List (ListBox) */}
        {dropdownOpen && (
          <ul
            className={classNames(
              "absolute left-0 top-full mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200 z-50",
              "max-h-60 overflow-y-auto transition-all duration-200"
            )}
          >
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-grey-100"
                onClick={() => {
                  onSelect?.(option);
                  setDropdownOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
