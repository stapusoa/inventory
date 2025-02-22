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
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";

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
          bg-[#F2F2F7] shadow-inner border-r border-gray-300 rounded-r-2xl`}
        >
          <div className="p-3 flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-2">
              {/* Hide Sidebar Button (Only in expanded mode) */}
              {sidebarState === "expanded" && (
                <button
                  onClick={() => setSidebarState("hidden")}
                  className="p-2 rounded-lg hover:bg-gray-200"
                  aria-label="Hide Sidebar"
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.86328 26.7852H26.1367C28.5977 26.7852 29.8164 25.5664 29.8164 23.1523V8.84375C29.8164 6.42969 28.5977 5.21094 26.1367 5.21094H5.86328C3.41406 5.21094 2.18359 6.41797 2.18359 8.84375V23.1523C2.18359 25.5781 3.41406 26.7852 5.86328 26.7852Z"
                      fill="#007AFF"
                    />
                  </svg>
                </button>
              )}

              {/* Three-Dots Menu Button (Always visible when sidebar isn't hidden) */}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="p-2 rounded-lg hover:bg-gray-200"
                  aria-label="Sidebar Options"
                >
                  <MoreVertical className="h-5 w-5 text-gray-600" />
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
                      Condense Menu {sidebarState === "condensed" && <Check className="w-4 h-4 text-blue-500" />}
                    </button>
                    <button
                      className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setSidebarState("expanded");
                        setShowMenu(false);
                      }}
                    >
                      Expand Menu {sidebarState === "expanded" && <Check className="w-4 h-4 text-blue-500" />}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto">
              {menuItems.map((item) => (
                <div key={item.label} className="mb-1">
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all
                      ${
                        isActive(item.path)
                          ? "bg-blue-500 text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                      }`}
                  >
                    <item.icon className="h-5 w-5 min-w-[20px]" />
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