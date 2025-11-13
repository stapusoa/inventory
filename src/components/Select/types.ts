import { ReactNode } from "react";
import type { SelectSize, SelectColor, SelectVariant, SelectValue } from "./selectConstants";

export interface SelectProps {
  children?: ReactNode;
  className?: string;
  startIcon?: ReactNode;
  fullWidth?: boolean;
  isDisabled?: boolean;
  size?: SelectSize;
  variant?: SelectVariant;
  color?: SelectColor;
  placeholder?: string;
  error?: boolean | string;

  // 🔽 Dropdown Enhancements
  options?: string[]; // ✅ Dropdown options
  onSelect?: (selectedValue: string) => void; // ✅ Called when option is selected
  isDropdownOpen?: boolean; // ✅ Tracks dropdown visibility

  // 🔍 Search & Controlled Select Support
  value?: SelectValue;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLSelectElement>) => void;
  debounceTime?: number;

  onClick?: () => void;
}
