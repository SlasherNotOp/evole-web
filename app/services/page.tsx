"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { workExperience } from "@/data";
import { useRouter, useSearchParams } from "next/navigation";

const ServicesPage = () => {
    const searchParams = useSearchParams();

    // Scroll to the service ID when hash changes
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [searchParams]);

    return (
        <div className="py-20 px-6 md:px-16 lg:px-28 bg-gradient-to-b from-[#04071d] to-[#0c0e23] text-white">
            {/* Page Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-extrabold text-center mb-16"
            >
                Our <span className="text-purple">Services</span>
            </motion.h1>

            {/* All Services */}
            <div className="flex flex-col gap-20">
                {workExperience.map((service, index) => (
                    <motion.section
                        key={service.id}
                        id={service.slug} // ✅ Each section gets a unique ID
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#0d102d] rounded-2xl border border-gray-700 shadow-lg p-8"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <img
                                src={service.thumbnail}
                                alt={service.title}
                                className="w-32 h-32 object-contain"
                            />
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                                <p className="text-gray-300 mb-6">{service.desc}</p>
                                {/* Temporary extra details */}
                                <p className="text-gray-400 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Quisque et est quis sapien ultricies aliquam. Sed fermentum
                                    risus vitae dolor tincidunt, vel dignissim justo dictum.
                                </p>
                                <button className="bg-purple px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition">
                                    Get This Service
                                </button>
                            </div>
                        </div>
                    </motion.section>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
