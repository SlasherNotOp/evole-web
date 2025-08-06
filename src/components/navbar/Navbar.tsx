"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    // 
    <nav className="w-full fixed top-0  z-50 backdrop-blur-md border-b border-white/10">
      <div className=" flex items-center justify-around px-6 h-[70px] ">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-white tracking-tight">
          <img
            src="/assets/1.svg/"
            alt="EvolTech Logo"
            width={100}
            height={100}
            className="w-[150px] object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300 items-center">
          <li className="hover:text-white transition">Home</li>
          <li className="hover:text-white transition">About</li>
          <li className="hover:text-white transition">Services</li>
          <li className="hover:text-white transition">Contact</li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <button className="button-primary text-sm shadow-lg">
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 border-t border-white/10">
          <ul className="space-y-4 font-medium text-gray-300 text-base">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li>
              <button className="button-primary w-full text-sm">
                Let's Talk
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
