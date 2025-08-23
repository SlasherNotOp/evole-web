"use client";

import React from "react";
import { motion } from "framer-motion";
import { workExperience } from "@/data";
import { FaArrowRight } from "react-icons/fa6";

const ServicesPage = () => {
    return (
        <div className="py-20 px-6 md:px-16 lg:px-28 bg-gradient-to-b from-[#04071d] to-[#0c0e23] text-white">
            {/* Page Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-extrabold text-center mb-10"
            >
                Our <span className="text-purple">Services</span>
            </motion.h1>

            {/* Services Grid */}
            <motion.div
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.2 } },
                }}
                className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"
            >
                {workExperience.map((service, index) => (
                    <motion.div
                        key={service.id}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            show: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 120 }}
                        className="bg-[#0d102d] rounded-2xl border border-gray-700 shadow-lg p-6 flex flex-col justify-between hover:shadow-purple-500/20 transition duration-300"
                    >
                        <img
                            src={service.thumbnail}
                            alt={service.title}
                            className="w-24 h-24 object-contain mx-auto mb-6"
                        />
                        <h2 className="text-2xl font-bold text-center mb-3">
                            {service.title}
                        </h2>
                        <p className="text-gray-300 text-center mb-6">{service.desc}</p>

                        <motion.button
                            whileHover={{ x: 5 }}
                            className="flex items-center justify-center gap-2 text-purple font-semibold"
                        >
                            Learn More <FaArrowRight />
                        </motion.button>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ServicesPage;
