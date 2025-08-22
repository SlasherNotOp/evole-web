import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// Floating Animated Gradient Blob
const GradientBlob = ({
    className,
    style,
    delay = 0,
}: {
    className?: string;
    style?: React.CSSProperties;
    delay?: number;
}) => (
    <motion.div
        className={`absolute rounded-full blur-3xl opacity-40 ${className}`}
        style={style}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            delay,
        }}
    />
);

export const OurStory = () => {
    return (
        <div className="relative w-full py-32 px-4 flex justify-center items-center overflow-hidden">
            {/* Animated Gradient Background Blobs */}
            <GradientBlob
                className="bg-purple-500"
                style={{ width: 300, height: 300, top: "10%", left: "5%" }}
            />
            <GradientBlob
                className="bg-blue-500"
                style={{ width: 250, height: 250, top: "50%", left: "75%" }}
                delay={3}
            />
            <GradientBlob
                className="bg-pink-500"
                style={{ width: 200, height: 200, bottom: "10%", left: "40%" }}
                delay={6}
            />

            {/* Content Card */}
            <motion.div
                className="relative z-10 max-w-4xl w-full bg-white/5 backdrop-blur-md rounded-xl border border-white/10 px-6 py-12 text-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <TextGenerateEffect
                    flag={false}
                    words="Our Story"
                    className="text-[2.5rem] md:text-5xl font-semibold text-white mb-6"
                />

                <motion.p
                    className="text-white/90 text-sm md:text-lg leading-relaxed font-poppins"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Evolve Media was born out of a simple idea:{" "}
                    <b>Digital marketing should deliver results, not just likes.</b> Founded
                    in Dhule, our journey began with one client and one goal — to prove that
                    great storytelling and smart strategies can transform businesses. What
                    started as a local agency has now evolved into a full-service powerhouse
                    serving 70+ clients across India.
                </motion.p>
            </motion.div>
        </div>
    );
};
