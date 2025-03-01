import { ReactNode } from "react";
import type { ButtonSize, ButtonColor, ButtonType, ButtonVariant } from './buttonConstants'

export interface ButtonProps {
  children?: ReactNode
  className?: string
  startIcon?: ReactNode
  endIcon?: ReactNode
  fullWidth?: boolean
  isDisabled?: boolean
  size?: ButtonSize
  type?: ButtonType
  variant?: ButtonVariant
  color?: ButtonColor
  iconButton?: ReactNode
  onClick?: () => void;
}
