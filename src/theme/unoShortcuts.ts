
export const unoShortcuts = {
  page: 'max-w-392 mx-auto px-4 md:px-6 lg:px-8',
  'page-wide': 'max-w-452 mx-auto px-4 md:px-6',
  'page-tight': 'max-w-300 mx-auto px-4 md:px-6 lg:px-8',
  'page-tighter': 'max-w-4xl mx-auto px-4 md:px-6 lg:px-8',
  'page-full': 'max-w-full',
  'btn-small': 'py-1.5 px-2 rounded-full',
  'btn-medium': 'p-2 rounded-sm',
  'btn-large': 'py-3 px-6 rounded-md',
  'btn-primary': 'bg-blue flex justify-center items-center decoration-none font-sfpro font-500 text-[17px] leading-5.5 text-white shadow-sm hover:bg-blue/50 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue/30',
  'btn-secondary': 'bg-transparent flex justify-center items-center decoration-none font-sfpro font-500 text-[17px] leading-5.5 text-blue hover:bg-blue/2',

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
