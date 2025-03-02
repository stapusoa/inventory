import {
  AddIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  HomeIcon,
  HorizMoreCircleIcon,
  SidebarIcon,
  SearchIcon,
  SortDownIcon,
  SortUpIcon,
  XIcon,
  FilterIcon,
  CheckIcon
} from '../icons'

const IconMapping = {
  add: <AddIcon />,
 xmark: <XIcon />,
 filter: <FilterIcon />,
 check: <CheckIcon />,
  chevronDown: <ChevronDownIcon />,
  chevronLeft: <ChevronLeftIcon />,
  chevronRight: <ChevronRightIcon />,
  chevronUp: <ChevronUpIcon />,
  home: <HomeIcon />,
  horizMoreCircle: <HorizMoreCircleIcon />,
  sortDown: <SortDownIcon />,
  sortUp: <SortUpIcon />,
  sidebar: <SidebarIcon />,
  search: <SearchIcon />
}

type AvailableIcons = keyof typeof IconMapping

export { IconMapping }
export type { AvailableIcons }
