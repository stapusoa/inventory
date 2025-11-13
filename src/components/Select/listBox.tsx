import * as React from "react";
import classNames from "classnames";

interface ListBoxProps {
  isOpen: boolean;
  options: string[];
  onSelect: (selectedValue: string) => void;
}

export const ListBox = React.forwardRef<HTMLUListElement, ListBoxProps>(
  ({ isOpen, options, onSelect }, ref) => {
    if (!isOpen) return null;

    return (
      <ul
        ref={ref}
        className={classNames(
          "absolute left-0 top-full mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200 z-50",
          "max-h-60 overflow-y-auto transition-all duration-200"
        )}
      >
        {options.map((option, index) => (
          <li
            key={index}
            className="px-4 py-2 cursor-pointer hover:bg-grey-100"
            onClick={() => onSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    );
  }
);

ListBox.displayName = "ListBox";