import type { ForwardedRef } from "react";
import { forwardRef } from "react";
import type { ButtonProps } from "./types";
import classNames from "classnames";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className, // ✅ Accepts `className` for full customization
      isDisabled = false,
      iconButton = false,
      size = "medium",
      type = "button",
      onClick,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        {...props}
        className={classNames(
          "flex items-center font-sfpro justify-center rounded-md transition-all duration-200",
          { 
            "p-1": iconButton === true && size === "small",
            "p-3": iconButton === true && size === "medium",
            "p-4": iconButton === true && size === "large",

            "p-2 text-3.5 leading-4": iconButton === false && size === "small",
            "px-3 py-2 text-3.75 leading-4": iconButton === false && size === "medium",
            "px-4 py-2 text-4.25 leading-5": iconButton === false && size === "large",

            "opacity-50 cursor-not-allowed": isDisabled },
          className // ✅ Allows user to pass any custom styles
        )}
        disabled={isDisabled}
        ref={ref}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";