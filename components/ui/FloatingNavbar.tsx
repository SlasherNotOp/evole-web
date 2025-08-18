"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react"; // ✅ for hamburger icons

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex items-center justify-between w-[90vw] h-[10vh] md:w-[85vw] lg:w-[80vw] fixed z-[5000] top-6 inset-x-0 mx-auto px-6 py-0 rounded-full border border-black/10",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.85)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {/* ✅ Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/1.svg"
            alt="Company Logo"
            width={100}
            height={28}
            className="object-contain"
          />
        </Link>

        {/* ✅ Center: Nav Links (hidden on mobile) */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="relative text-sm text-neutral-200 hover:text-neutral-400 transition-colors flex items-center space-x-1"
            >
              <span>{navItem.name}</span>
            </Link>
          ))}
        </div>

        {/* ✅ Right: Desktop Contact Button */}
        <div className="hidden md:block">
          <button
            className="relative px-5 py-2 text-sm font-medium text-white rounded-lg 
               border border-white/20 backdrop-blur-sm 
               bg-white/10 hover:bg-white/20 transition"
          >
            Contact
            <span className="absolute inset-x-0 w-2/3 mx-auto -bottom-px h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          </button>
        </div>

        {/* ✅ Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </motion.div>

      {/* ✅ Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[80px] left-0 w-full bg-black-100/90 backdrop-blur-lg z-[4000] p-6 flex flex-col space-y-4 md:hidden"
          >
            {navItems.map((navItem, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={navItem.link}
                className="text-white text-lg hover:text-purple transition"
                onClick={() => setMenuOpen(false)}
              >
                {navItem.name}
              </Link>
            ))}

            <button
              className="w-full px-5 py-3 text-sm font-medium text-white rounded-lg 
                 border border-white/20 backdrop-blur-sm 
                 bg-white/10 hover:bg-white/20 transition"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};
