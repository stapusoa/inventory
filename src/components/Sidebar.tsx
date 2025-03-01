import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Package,
  Factory,
  DollarSign,
  ShoppingCart,
  Settings,
  Bell,
  MoreVertical,
  ChevronRight,
  Check,
  SidebarIcon,
} from "lucide-react";
import { Icon } from './Icon'
import { useState, useRef, useEffect } from "react";
import  {Button}  from "./Button/button";

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  {
    icon: Package,
    label: "Materials",
    path: "/materials",
    submenu: [
      { label: "Inventory", path: "/materials/inventory" },
      { label: "Locations", path: "/materials/locations" },
      { label: "Transfer Orders", path: "/materials/transfer-orders" },
    ],
  },
  { icon: Factory, label: "Manufacturing", path: "/manufacturing" },
  { icon: DollarSign, label: "Sales", path: "/sales" },
  { icon: ShoppingCart, label: "Purchasing", path: "/purchasing" },
];

const Sidebar = () => {
  const location = useLocation();
  const [sidebarState, setSidebarState] = useState<"expanded" | "condensed" | "hidden">("expanded");
  const [showMenu, setShowMenu] = useState(false);
  const isActive = (path: string) => location.pathname === path;
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <>
      {/* Sidebar */}
      {sidebarState !== "hidden" && (
        <div
          className={`fixed left-0 top-0 h-screen transition-all duration-300 ease-in-out
          ${sidebarState === "condensed" ? "w-16" : "w-72"}
          bg-grey-50 shadow-inner border-r border-gray-300`}
        >
          <div className="py-6 gap-8 flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-2">
              {/* Hide Sidebar Button (Only in expanded mode) */}
              {sidebarState === "expanded" && (
                <button
                  onClick={() => setSidebarState("hidden")}
                  className="p-2 bg-transparent border-none cursor-pointer btn-secondary"
                  aria-label="Hide Sidebar"
                >
                 <Icon name="sidebar" size="medium" />

                </button>
              )}

              {/* Three-Dots Menu Button (Always visible when sidebar isn't hidden) */}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="p-2 bg-transparent border-none cursor-pointer btn-secondary"
                  aria-label="Sidebar Options"
                >
                   <Icon name="horizMoreCircle" size="medium" />
                </button>

                {/* Popover menu adjusts position dynamically */}
                {showMenu && (
                  <div
                    className={`absolute mt-2 w-48 bg-white shadow-lg rounded-lg border p-2
                      ${sidebarState === "condensed" ? "left-0" : "right-0"}`}
                  >
                    <button
                      className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setSidebarState("hidden");
                        setShowMenu(false);
                      }}
                    >
                      Hide Menu
                    </button>
                    <button
                      className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setSidebarState("condensed");
                        setShowMenu(false);
                      }}
                    >
                      Condense Menu {sidebarState === "condensed" && <Check className="w-4 h-4 text-blue" />}
                    </button>
                    <button
                      className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setSidebarState("expanded");
                        setShowMenu(false);
                      }}
                    >
                      Expand Menu {sidebarState === "expanded" && <Check className="w-4 h-4 text-blue" />}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto font-sfpro text-4.25 leading-14">
              {menuItems.map((item) => (
                <div key={item.label} className="pl-2">
                  <Link
                    to={item.path}
                    className={`flex items-center rounded-lg decoration-none transition-all
                      ${
                        isActive(item.path)
                          ? "bg-white rounded-l-full text-blue shadow-md"
                          : "text-grey-600"
                      }`}
                  >
                    <item.icon className="h-6 w-6 min-w-[20px] p-x" />
                    {sidebarState !== "condensed" && <span className="ml-3">{item.label}</span>}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Restore Sidebar Button (When Hidden) */}
      {sidebarState === "hidden" && (
        <button
          className="fixed top-4 left-4 p-2 bg-white rounded-lg shadow-md border hover:bg-gray-100"
          onClick={() => setSidebarState("expanded")}
          aria-label="Show Sidebar"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      )}
    </>
  );
};

export default Sidebar;