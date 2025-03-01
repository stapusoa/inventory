const buttonColors = {
  primary: 'rgb(0, 122, 255)',
  secondary: 'rgb(52, 199, 89)',
  warning: 'rgb(255, 149, 0)',
  success: 'rgb(0, 122, 255)',
  error: 'rgb(255, 59, 48)',
  info: 'rgb(52, 199, 89)',
} as const

const buttonHoverColors = {
  primaryActive: 'rgba(0, 122, 255, 0.5)',
  secondaryActive: 'rgba(52, 199, 89, 0.5)',
  warningActive: 'rgba(255, 149, 0, 0.5)',
  successActive: 'rgba(0, 122, 255, 0.5)',
  errorActive: 'rgba(255, 59, 48, 0.5)',
  infoActive: 'rgba(52, 199, 89, 0.5)',
} as const

const mainColors = {
  red: 'rgb(255, 59, 48)',
  orange: 'rgb(255, 149, 0)',
  yellow: 'rgb(255, 204, 0)',
  green: 'rgb(52, 199, 89)',
  mint: 'rgb(0, 199, 190)',
  teal: 'rgb(48, 176, 199)',
  cyan: 'rgb(50, 173, 230)',
  blue: 'rgb(0, 122, 255)',
  indigo: 'rgb(88, 86, 214)',
  purple: 'rgb(175, 82, 222)',
  pink: 'rgb(255, 45, 85)',
  brown: 'rgb(162, 132, 94)'
} as const


const greys = {
  50: 'rgb(242, 242, 247)',
  100: 'rgb(229, 229, 234)',
  200: 'rgb(209, 209, 214)',
  300: 'rgb(199, 199, 204)',
  400: 'rgb(174, 174, 178)',
  500: 'rgb(142, 142, 147)',
  600: 'rgb(99, 99, 102)',
  700: 'rgb(72, 72, 74)',
  800: 'rgb(58, 58, 60)',
  900: 'rgb(44, 44, 46)',
  1000: 'rgb(28, 28, 30)',
} as const

const colors = {
  ...buttonColors,
  ...buttonHoverColors,
  ...mainColors,
  grey: { ...greys },
  body: 'rgb(58, 58, 60)',
  white: '#FFFFFF',
  black: '#000000',
  
} as const

export { buttonColors, buttonHoverColors, colors }
