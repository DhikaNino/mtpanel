import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaUserCircle, FaServer, FaGlobe } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-gray-900 text-white w-full flex items-center justify-between">
      {/* Sidebar Toggle / Brand */}
      <div className="flex items-center gap-4">
        {/* Server Info */}
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-300">
          <FaServer />
          <span>Ubuntu 22.04 | 192.168.1.100</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative hidden md:block">
        <input
          type="text"
          placeholder="Cari..."
          className="w-96 px-6 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute right-3 top-3 text-gray-400" />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        {/* Server Status */}
        <div className="hidden md:flex items-center gap-2 text-sm text-green-400">
          <FaGlobe />
          <span>Online</span>
        </div>

        {/* Notification Icon */}
        <FaBell className="text-xl cursor-pointer hover:text-gray-400" />

        {/* Profile Dropdown */}
        <div className="relative">
          <FaUserCircle
            className="text-2xl cursor-pointer hover:text-gray-400"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 shadow-lg rounded-lg">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">
                Profile
              </Link>
              <Link to="/settings" className="block px-4 py-2 hover:bg-gray-200">
                Settings
              </Link>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
