export interface IconProps {
  size: number;
  color: string;
  onClick?: () => void;
}

export enum ICONS {
  AddUser = "AddUser",
  ArrowDownFilled = "ArrowDownFilled",
  ArrowDown = "ArrowDown",
  ArrowLeft = "ArrowLeft",
  ArrowRight = "ArrowRight",
  ArrowUpFilled = "ArrowUpFilled",
  ArrowUp = "ArrowUp",
  Bell = "Bell",
  PaperUpload = "PaperUpload",
  Calendar = "Calendar",
  Chart = "Chart",
  Check = "Check",
  CloseSquareFilled = "CloseSquareFilled",
  Close = "Close",
  Dashboard = "Dashboard",
  Document = "Document",
  DoubleArrowLeft = "DoubleArrowLeft",
  Ellipsis = "Ellipsis",
  EyeClosed = "EyeClosed",
  Filter = "Filter",
  Hamburger = "Hamburger",
  InfoSquare = "InfoSquare",
  Logout = "Logout",
  Minus = "Minus",
  ThreeUsers = "ThreeUsers",
  Plus = "Plus",
  Profile = "Profile",
  Search = "Search",
  Settings = "Settings",
  ShieldDone = "ShieldDone",
  Sort = "Sort",
  Support = "Support",
  TickSquareFilled = "TickSquareFilled",
  TwoUsers = "TwoUsers",
  Warning = "Warning",
  Work = "Work",

  // DUOTONE ICONS
  DUOTONE_DOCUMENT = "DUOTONE_DOCUMENT",
  DUOTONE_PAPER = "DUOTONE_PAPER",
  DUOTONE_PROFILE = "DUOTONE_PROFILE",
  DUOTONE_REVENUE = "DUOTONE_REVENUE",
  DUOTONE_USERS = "DUOTONE_USERS",
}
