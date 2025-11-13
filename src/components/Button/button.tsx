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
          "transition-all duration-200",
          { 
            "p-1": iconButton === true && size === "small",
            "p-3": iconButton === true && size === "medium",
            "p-4": iconButton === true && size === "large",

            "p-2 btn-type-sm": iconButton === false && size === "small",
            "px-3 py-2 btn-type-md": iconButton === false && size === "medium",
            "px-4 py-2 btn-type-lg": iconButton === false && size === "large",

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