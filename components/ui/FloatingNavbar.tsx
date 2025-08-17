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
          "flex items-center justify-between w-[90vw] h-[10vh] md:w-[85vw] lg:w-[80vw] fixed z-[5000] top-10 inset-x-0 mx-auto px-6 py-0 rounded-full border border-black/10",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.85)", // slightly stronger bg
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {/* ✅ Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/1.svg"
            alt="Company Logo"
            width={120}
            height={32}
            className="object-fill"
          />
        </Link>

        {/* ✅ Center: Nav Links */}
        <div className="flex-1 flex justify-center items-center space-x-6">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="relative text-sm text-neutral-200 dark:hover:text-neutral-300 hover:text-neutral-400 transition-colors flex items-center space-x-1 !cursor-pointer"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span>{navItem.name}</span>
            </Link>
          ))}
        </div>

        {/* ✅ Right: Button */}
        <div>
          <button
            className="relative px-5 py-2 text-sm font-medium text-white rounded-lg 
               border border-white/20 backdrop-blur-sm 
               bg-white/10 hover:bg-white/20 transition"
          >
            Contact
            {/* bottom gradient line for accent */}
            <span className="absolute inset-x-0 w-2/3 mx-auto -bottom-px h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
