import { useState, useRef } from "react";
import { Icon } from "../Icon";
import classNames from "classnames";

interface SelectProps {
  placeholder?: string;
  options: string[];
  onSelect: (option: string) => void;
  value?: string;
  fullWidth?: boolean;
}

export const Select = ({ placeholder = "Select an option", options, onSelect, value, fullWidth }: SelectProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={classNames("relative", { "w-full": fullWidth })} ref={selectRef}>
      <div
        className={classNames(
          "relative w-full select input-sm",
          "flex items-center justify-between cursor-pointer",
          "focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue-500",
          "hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="truncate">{value || placeholder}</span>
        <Icon name="chevronDown" size="small" />
      </div>

      {dropdownOpen && (
        <ul
          className={classNames(
            "absolute left-0 mt-2 w-full listbox",
            "max-h-60 overflow-y-auto transition-all duration-200 z-50"
          )}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="option cursor-pointer hover:bg-grey-100"
              onClick={() => {
                onSelect(option);
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
};