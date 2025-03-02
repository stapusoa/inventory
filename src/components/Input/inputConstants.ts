type InputSize = 'small' | 'medium' | 'large'

type InputType = 'text' | 'digit' | 'tel' | 'decimal' | 'email'

type InputVariant =
  | 'filled'
  | 'outlined'
  | 'underline'

type InputColor = 'none' | 'white' | 'grey' | 'red' | 'grey'

type InputValue = string | undefined; 

export type { InputSize, InputType, InputVariant, InputColor, InputValue }
