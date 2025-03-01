import { ReactNode } from "react";
import type { InputSize, InputColor, InputType, InputVariant, InputValue } from "./inputConstants";

export interface InputProps {
  children?: ReactNode;
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  isDisabled?: boolean;
  inputSize?: InputSize; // ✅ Renamed `size` to `inputSize` to avoid conflicts
  type?: InputType;
  variant?: InputVariant;
  color?: InputColor;
  placeholder?: string;
  error?: boolean | string;

  // 🔽 Dropdown Enhancements
  options?: string[]; // ✅ Dropdown options
  onSelect?: (selectedValue: string) => void; // ✅ Called when option is selected
  isDropdownOpen?: boolean; // ✅ Tracks dropdown visibility

  // 🔍 Search & Controlled Input Support
  value?: InputValue;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  debounceTime?: number;

  onClick?: () => void;
}
