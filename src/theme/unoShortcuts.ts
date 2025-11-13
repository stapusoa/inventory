import { typography, buttonType, inputType } from "./typography";

export const unoShortcuts = {
  ...typography, 
  ...buttonType,
  ...inputType,
  page: 'max-w-392 mx-auto px-4 md:px-6 lg:px-8',
  'page-wide': 'max-w-452 mx-auto px-4 md:px-6',
  'page-tight': 'max-w-300 mx-auto px-4 md:px-6 lg:px-8',
  'page-tighter': 'max-w-4xl mx-auto px-4 md:px-6 lg:px-8',
  'page-full': 'max-w-full',
  'btn-small': 'py-1.5 px-2 rounded-full',
  'btn-medium': 'p-2 rounded-sm',
  'btn-large': 'py-3 px-6 rounded-md',
  'btn-primary': 'bg-blue flex gap-1 justify-center rounded-3 items-center border-0 decoration-none text-white shadow-sm hover:bg-blue/50 focus:outline-3 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue/30 cursor-pointer',
  'btn-secondary': 'bg-transparent flex gap-1 justify-center rounded-3 items-center decoration-none text-blue hover:bg-blue/2 cursor-pointer',
  'btn-ghost': 'bg-transparent gap-1 color-blue hover:color-blue/50 flex items-center justify-center border-0 cursor-pointer',
  'input': 'flex flex-row gap-3 items-start justify-center rounded-3 bg-transparent border-solid border-1 border-grey-100 font-sfpro font-400 text-grey-500',
  'select': 'flex flex-row gap-3 items-start justify-center rounded-3 bg-transparent border-solid border-1 border-grey-100 font-sfpro font-400 text-grey-500',
  'listbox': 'flex flex-col bg-white/90 rounded-3 shadow-2xl backdrop-blur-sm',
  'option': 'flex flex-row p-4 items-start justify-between font-sfpro text-3.75 leading-5 font-400 text-grey-500',
  'input-sm': 'px-3 py-2 text-3.75',
  'input-md': 'p-2 text-4.25 leading-5.5',
  'input-lg': 'p-3 text-4.25',
  'header-base-styles':
    'm-0 font-gilroy font-not-oblique font-700',
  'navlink': 'font-gilroy text-blue font-medium text-5 decoration-none hover:text-green',
  'h1': 'header-base-styles text-16 leading-none text-blue',
  'h2': 'header-base-styles text-12 leading-tight text-grey-700',
  'h3': 'header-base-styles text-10 leading-cozy text-grey-700',
  'h4': 'header-base-styles text-8 leading-tight',
  'body-semibold': 'm-0 font-gilroy text-7 font-600',
  body: 'm-0 font-gilroy leading-tight',
  'body-large': 'text-7 font-400',
  'body-2': 'body-base-styles text-5',

  administration: "list-none p-0 m-0",
  // Shortcut for director
  director: "mx-auto w-1/2",
  // Shortcut for department and its variations
  department: "float-left w-[18%] ml-[2%] mb-6",

  // Shortcut for section
  // Shortcut for hover transitions
  hoverable: "transition-all hover:shadow-lg",
  node: "bg-[#81B29A] text-white text-center font-bold rounded-lg py-2 px-4 shadow-md hover:shadow-lg transition",

  // Section styles
  section: "bg-white text-gray-700 text-center font-semibold rounded-lg py-2 px-4 shadow-md hover:shadow-lg transition",

  // Department colors
  "department-a": "bg-[#FFD600] text-gray-800",
  "department-b": "bg-[#AAD4E7] text-gray-800",
  "department-c": "bg-[#FDB0FD] text-gray-800",
  "department-d": "bg-[#A3A2A2] text-gray-800",
  "department-e": "bg-[#f0f0f0] text-gray-800",

  // Connector line
  connector: "absolute w-[2px] bg-white",
  "subdirector-after": "relative after:content-[''] after:block after:w-0 after:h-[130px] after:bg-red-500 after:border-1-[4px] after:border-white after:left-[45.45%] after:relative"
} as const
