import Navbar from "./Navbar";
import { Server, Route, LogOut, Database, SquareTerminal, CalendarSearch, ChevronDown, List, School, School2 } from "lucide-react";
import { BsHeartFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Sidebar({ children }) {
    const [listSekolah, setListSekolah] = useState(false);

    return (
        <div className="flex h-screen">
            <div id="menu" className="bg-gray-900 w-72 min-h-screen border-r border-white flex flex-col">
                <a href="/" className="p-6 flex items-center space-x-3 text-white">
                    <img src="/logo.png" alt="Logo" className="w-10 h-10" />
                    <span className="text-xl font-semibold">MT Panel</span>
                </a>

                <nav className="mt-4 flex-1">
                    <ul className="space-y-2">
                        <SidebarItem to="/" icon={<Server size={20} color="gray" />} text="Home" />
                        <SidebarItem to="/databases" icon={<Database size={20} color="gray" />} text="Databases" />
                        <SidebarItem to="/domains" icon={<Route size={20} color="gray" />} text="Domains" />
                        <SidebarItem to="/logs" icon={<CalendarSearch size={20} color="gray" />} text="Logs" />
                        <SidebarItem to="/terminal" icon={<SquareTerminal size={20} color="gray" />} text="Terminal" />
                        <div>
                            <button
                                className="w-full flex items-center justify-between px-6 py-4 text-gray-300 transition hover:bg-indigo-600 hover:text-white"
                                onClick={() => setListSekolah(!listSekolah)}
                            >
                                <div className="flex items-center gap-3">
                                    <List size={20} color="gray" />
                                    <span>Sekolah</span>
                                </div>
                                <ChevronDown size={18} className={`${listSekolah ? "rotate-180" : ""} transition`} />
                            </button>

                            {listSekolah && (
                                <ul className="bg-gray-800 text-gray-300">
                                    <SidebarItem to="/terminal/bash" icon={<School/>} text="SMK Avicena" />
                                    <SidebarItem to="/terminal/python" icon={<School/>} text="SMK Suryatama" />
                                    <SidebarItem to="/terminal/node" icon={<School/>} text="SMK Bina Putra Mandiri" />
                                </ul>
                            )}
                        </div>
                    </ul>
                </nav>



                <div className="p-4">
                    <SidebarItem to="/logout" icon={<LogOut size={20} />} text="Logout" />
                </div>
            </div>

            <div className="flex-1 flex flex-col">
                <div className="sticky top-0 z-10 bg-white shadow border-b border-white">
                    <Navbar />
                </div>

                <div className="flex-1 overflow-y-auto bg-gray-900 text-white">
                    <div className="p-6 min-h-screen">
                        {children}
                    </div>
                    <div className="p-3 bg-gray-900 text-center text-white mt-auto border-t border-white">
                        <p className="flex justify-center items-center gap-1">Made by <a href="#" className="text-blue-500">Andhika Rikio</a> with <BsHeartFill size={20} color="red" /></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SidebarItem({ to, icon, text }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <li className="relative">
            <Link
                to={to}
                className={`flex items-center px-6 py-4 text-gray-300 transition
                    ${isActive ? "bg-indigo-700 text-white font-bold text-md" : "hover:bg-indigo-600 hover:text-white"}`}
            >
                {isActive && (
                    <div className="absolute left-0 top-0 h-full w-2 bg-white"></div>
                )}

                {icon}
                <span className="ml-3">{text}</span>
            </Link>
        </li>
    );
}
