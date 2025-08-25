"use client";

import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import MagicButton from "@/components/MagicButton";

const ContactPage = () => {
    return (
        <div className="w-full h-full flex items-center flex-col">
            <div className="flex my-32 flex-col lg:flex-row justify-between gap-12 bg-black-200 p-6 sm:p-10 rounded-2xl border border-black-300  w-[90%] sm:w-[80%]">
                {/* LEFT SIDE - INFO */}
                <motion.div
                    className="flex-1 text-white"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Let’s Work Together!
                    </h2>
                    <p className="text-gray-300 mb-6 max-w-md">
                        We’re just a message away from transforming your digital presence. Whether you’re a local business or a growing brand — we’re ready to help you scale.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">India</h3>
                    <div className="w-16 border-b border-gray-600 mb-6"></div>

                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-purple" />
                            Dhule Maharastra 424001
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-purple" />
                            evolvemedia@gmail.com
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-purple" />
                            +91 9130754116
                        </li>
                    </ul>
                </motion.div>

                {/* RIGHT SIDE - FORM */}
                <motion.div
                    className="flex-1 bg-black-300 p-6 rounded-xl"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Drop Us a Message
                    </h3>

                    <motion.form
                        className="w-full flex flex-col gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {/* Name */}
                        <motion.input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg bg-black-100 border border-black-300 text-white focus:outline-none focus:ring-2 focus:ring-purple"
                            required
                            whileFocus={{ scale: 1.02 }}
                        />

                        {/* Email */}
                        <motion.input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg bg-black-100 border border-black-300 text-white focus:outline-none focus:ring-2 focus:ring-purple"
                            required
                            whileFocus={{ scale: 1.02 }}
                        />

                        {/* Phone */}
                        <div className="flex gap-2">
                            <motion.input
                                type="tel"
                                placeholder="+91"
                                className="w-1/3 p-3 rounded-lg bg-black-100 border border-black-300 text-white focus:outline-none focus:ring-2 focus:ring-purple"
                                required
                                whileFocus={{ scale: 1.02 }}
                            />
                            <motion.input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-2/3 p-3 rounded-lg bg-black-100 border border-black-300 text-white focus:outline-none focus:ring-2 focus:ring-purple"
                                required
                                whileFocus={{ scale: 1.02 }}
                            />
                        </div>

                        {/* Location */}
                        <motion.input
                            type="text"
                            placeholder="Your Location"
                            className="w-full p-3 rounded-lg bg-black-100 border border-black-300 text-white focus:outline-none focus:ring-2 focus:ring-purple"
                            required
                            whileFocus={{ scale: 1.02 }}
                        />

                        {/* Service Type Dropdown */}
                        <motion.select
                            className="w-full p-3 rounded-lg bg-black-100 border border-black-300 text-white focus:outline-none focus:ring-2 focus:ring-purple"
                            required
                            whileFocus={{ scale: 1.02 }}
                        >
                            <option value="" disabled selected>
                                Select Service Type
                            </option>
                            <option value="social-media">Social Media Marketing</option>
                            <option value="content-creation">Content Creation (Reels & Ads)</option>
                            <option value="website-design">Website Design & Development</option>
                            <option value="seo">SEO</option>
                            <option value="performance-marketing">Performance Marketing</option>
                            <option value="branding">Branding & Graphic Design</option>
                            <option value="others">Others</option>
                        </motion.select>

                        {/* Button */}
                        <motion.div
                            className="w-full mt-2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <MagicButton
                                title="Book Free Consultation"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </motion.div>
                    </motion.form>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
