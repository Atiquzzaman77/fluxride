"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Cars", href: "/cars" },
    { name: "Add Car", href: "/add-car" },
    { name: "My Bookings", href: "/my-bookings" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0F0F17]/95 backdrop-blur-md border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="italic w-11 h-11 rounded-xl bg-linear-to-r  from-purple-700 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-900/40">
              F
            </div>

            <h1 className="text-2xl font-bold tracking-wide text-white">
              FLUX<span className="text-purple-500">RIDE</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 bg-linear-to-r from-purple-500 via-fuchsia-500 to-violet-400 transition-all duration-500 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <button className="cursor-pointer px-6 py-2.5 rounded-xl bg-linear-to-r from-purple-700 to-violet-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-700/30">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 pb-5" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-purple-900/40 text-white"
                      : "text-gray-300 hover:bg-purple-900/30 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <button className="mt-2 cursor-pointer px-5 py-3 rounded-xl bg-linear-to-r from-purple-700 to-violet-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-700/30">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;