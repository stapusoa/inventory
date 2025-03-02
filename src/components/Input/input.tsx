import { forwardRef } from "react";
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
    }
  ) => {

    return (
      <div
        className={classNames(
          "relative flex items-center justify-center font-sfpro",
          { "w-full": fullWidth },
        )}
      >
        {startIcon && (
          <span className="absolute left-3 flex text-grey-400 justify-center transform">
            {startIcon}
          </span>
        )}

        <input
          {...props}
          value={value}
          onChange={onChange}
          className={classNames(
            "w-full rounded-xl border-solid border-1 border-grey-100 transition-all duration-200 outline-none text-gray-900 pl-10",
            "focus:border-blue focus:-outline-offset-2 focus:outline-2 focus:outline-blue",
            "hover:border-blue/50",
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

        {endIcon && (
          <span className="absolute right-3 transform flex items-center color-grey-500 justify-center bg-transparent border-0">
            {endIcon}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
