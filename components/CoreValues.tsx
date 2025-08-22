import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaChartLine, FaHandshake } from "react-icons/fa6";

// Reusable animated blob
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
        className={`absolute rounded-full blur-3xl opacity-20 ${className} z-0`}
        style={style}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            delay,
        }}
    />
);

const coreValues = [
    {
        title: "Creative Integrity",
        description: "We never compromise on storytelling and quality.",
        borderColor: "blue",
    },
    {
        title: "Performance-Driven",
        description: "Every project is backed by data, KPIs, and results.",
        borderColor: "blue",
    },
    {
        title: "Transparent Communication",
        description: "Honest updates. Real expectations. Always.",
        borderColor: "blue",
    },
];

const CoreValues = () => {
    return (
        <section className="relative w-full py-32 px-6 bg-gradient-to-tr rounded from-gray-900 via-purple-900 to-black flex flex-col items-center overflow-hidden">
            {/* Background Blobs */}
            <GradientBlob
                className="bg-purple-600"
                style={{ width: 300, height: 300, top: "10%", left: "5%" }}
            />
            <GradientBlob
                className="bg-blue-600"
                style={{ width: 300, height: 300, bottom: "10%", right: "5%" }}
                delay={2}
            />

            {/* Section Heading */}
            <motion.h2
                className="text-white text-4xl md:text-5xl font-bold text-center mb-20 z-10 tracking-tight"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                Core Values
            </motion.h2>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 z-10 max-w-6xl w-full px-2">
                {coreValues.map((value, index) => {
                    const border = value.borderColor;
                    const fromColor = `from-${border}-800/20`;
                    const borderColor = `border-${border}-600/30`;
                    const glowColor = `group-hover:border-${border}-500/40`;
                    const shadowColor = `hover:shadow-${border}-500/30`;

                    return (
                        <motion.div
                            key={index}
                            className={`flex-1 relative group bg-gradient-to-br ${fromColor} to-black/30 border ${borderColor} rounded-2xl p-8 shadow-xl overflow-hidden flex flex-col gap-10 justify-between backdrop-blur-md transition-shadow ${shadowColor}  
                                `}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Glow border */}
                            <div
                                className={`absolute inset-0 border border-${border}-500/20 rounded-2xl ${glowColor} transition-all duration-300 pointer-events-none`}
                            />

                            <h3 className="text-xl lg:text-center font-semibold text-white">{value.title}</h3>

                            <p className="text-white/85 lg:text-center font-poppins text-base leading-relaxed font-light">
                                {value.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default CoreValues;
