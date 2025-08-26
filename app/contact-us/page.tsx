"use client";

import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import MagicButton from "@/components/MagicButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { submitFormValue } from "@/serverFunction/form";

const ContactPage = () => {
    // ✅ Formik Setup
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phoneCode: "+91",
            phone: "",
            location: "",
            service: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            phone: Yup.string()
                .matches(/^[0-9]{10}$/, "Must be 10 digits")
                .required("Phone number is required"),
            location: Yup.string().required("Location is required"),
            service: Yup.string().required("Please select a service"),
        }),
        onSubmit: async (values) => {
            await submitFormValue(values);
            formik.resetForm();
        },
    });

    return (
        <div className="w-full h-full flex items-center flex-col">
            <div className="flex my-32 flex-col lg:flex-row justify-between gap-12 bg-black-200 p-6 sm:p-10 rounded-2xl border border-black-300 w-[90%] sm:w-[80%]">
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
                        onSubmit={formik.handleSubmit}
                        className="w-full flex flex-col gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {/* Name */}
                        <motion.input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg bg-black-100 border border-black-300 text-white focus:outline-none focus:ring-2 focus:ring-purple"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            whileFocus={{ scale: 1.02 }}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <p className="text-red-500 text-sm">{formik.errors.name}</p>
                        )}

                        {/* Email */}
                        <motion.input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg bg-black-100 border border-black-300 text-white focus:outline-none focus:ring-2 focus:ring-purple"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            whileFocus={{ scale: 1.02 }}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-sm">{formik.errors.email}</p>
                        )}

                        {/* Phone */}
                        <div className="flex gap-2">
                            <motion.input
                                type="tel"
                                name="phoneCode"
                                placeholder="+91"
                                className="w-1/3 p-3 rounded-lg bg-black-100 border border-black-300 text-white focus:outline-none focus:ring-2 focus:ring-purple"
                                value={formik.values.phoneCode}
                                readOnly
                                whileFocus={{ scale: 1.02 }}
                            />
                            <motion.input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className="w-2/3 p-3 rounded-lg bg-black-100 border border-black-300 text-white focus:outline-none focus:ring-2 focus:ring-purple"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                whileFocus={{ scale: 1.02 }}
                            />
                        </div>
                        {formik.touched.phone && formik.errors.phone && (
                            <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                        )}

                        {/* Location */}
                        <motion.input
                            type="text"
                            name="location"
                            placeholder="Your Location"
                            className="w-full p-3 rounded-lg bg-black-100 border border-black-300 text-white focus:outline-none focus:ring-2 focus:ring-purple"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            whileFocus={{ scale: 1.02 }}
                        />
                        {formik.touched.location && formik.errors.location && (
                            <p className="text-red-500 text-sm">{formik.errors.location}</p>
                        )}

                        {/* Service Type Dropdown */}
                        <motion.select
                            name="service"
                            className="w-full p-3 rounded-lg bg-black-100 border border-black-300 text-white focus:outline-none focus:ring-2 focus:ring-purple"
                            value={formik.values.service}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            whileFocus={{ scale: 1.02 }}
                        >
                            <option value="" disabled>
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
                        {formik.touched.service && formik.errors.service && (
                            <p className="text-red-500 text-sm">{formik.errors.service}</p>
                        )}

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
                                type="submit"
                            />
                        </motion.div>
                    </motion.form>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
