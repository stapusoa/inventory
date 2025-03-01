import { forwardRef, useState } from "react";
import type { InputProps } from "./types";
import classNames from "classnames";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      isDisabled = false,
      type = "text",
      value = "",
      onChange,
      placeholder = "Enter text...",
      startIcon,
      endIcon,
      inputSize = "medium",
      fullWidth = false,
      options = [],
      onSelect,
      isDropdownOpen,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const [dropdownOpen, setDropdownOpen] = useState(isDropdownOpen || false); // ✅ Controls dropdown visibility

    const handleSelect = (option: string) => {
      if (onSelect) onSelect(option);
      setDropdownOpen(false); // ✅ Close dropdown after selection
    };

    return (
      <div
        className={classNames(
          "relative flex items-center justify-center font-sfpro",
          { "w-full": fullWidth }, // ✅ Apply full width if true
        )}
      >
        {startIcon && (
          <span className="absolute left-3 flex text-grey-400 justify-center transform">
            {startIcon}
          </span>
        )}

        {/* ✅ If type is dropdown, use a div instead of an input */}
        {type === "dropdown" ? (
          <div
            className={classNames(
              "w-full rounded-xl border-solid border-1 border-grey-100 transition-all pr-12 duration-200 outline-none text-grey-500 cursor-pointer",
              "focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              "hover:border-gray-500",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              {
                "p-2 text-4.25 leading-5.5": inputSize === "medium",
                "p-3 text-4.25": inputSize === "large",
                "px-3 py-2 text-3.75": inputSize === "small",
              },
              className
            )}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {value || placeholder}
          </div>
        ) : (
          <input
            ref={ref}
            {...props}
            value={value}
            onChange={onChange}
            className={classNames(
              "w-full rounded-xl border-solid border-1 border-grey-100 transition-all duration-200 outline-none text-gray-900 pl-10",
              "focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              "hover:border-gray-500",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              {
                "p-2 text-4.25 leading-5.5": inputSize === "medium",
                "p-3 text-4.25": inputSize === "large",
                "px-3 py-2 text-3.75": inputSize === "small",
              },
              className
            )}
            disabled={isDisabled}
            type={type}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
          />
        )}

        {endIcon && (
          <span className="absolute right-3 transform flex items-center color-grey-500 justify-center bg-transparent border-0">
            {endIcon}
          </span>
        )}

        {/* 🔽 Dropdown Options */}
        {dropdownOpen && options.length > 0 && (
          <ul className="absolute top-full left-0 w-full mt-1 bg-white shadow-lg rounded-md border border-gray-200 z-50">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(option)}
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

Input.displayName = "Input";