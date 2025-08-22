import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa6";

// Reusable animated blob with improved opacity and z-index
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

const MissionVision = () => {
    return (
        <section className="relative w-full py-32 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-black flex flex-col items-center overflow-hidden">
            {/* Animated Background Blobs */}
            <GradientBlob
                className="bg-purple-600"
                style={{ width: 300, height: 300, top: "5%", left: "8%" }}
            />
            <GradientBlob
                className="bg-blue-600"
                style={{ width: 300, height: 300, bottom: "5%", right: "8%" }}
                delay={3}
            />

            {/* Section Heading */}
            <motion.h2
                className="text-white text-4xl md:text-5xl font-bold text-center mb-20 z-10 tracking-tight"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                Our Mission & Vision
            </motion.h2>

            {/* Cards Container */}
            <div className="flex flex-col md:flex-row gap-10 z-10 max-w-6xl w-full px-2">
                {/* Mission Card */}
                <motion.div
                    className="flex-1 relative group bg-gradient-to-br from-purple-800/20 to-black/30 border border-purple-600/30 rounded-2xl p-8 shadow-xl overflow-hidden backdrop-blur-md hover:shadow-purple-500/30 transition-shadow z-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute inset-0 border border-purple-500/20 rounded-2xl group-hover:border-purple-500/40 transition-all duration-300 pointer-events-none" />

                    <div className="flex items-center gap-4 mb-6">
                        <FaBullseye className="text-purple-400 text-3xl" />
                        <h3 className="text-2xl font-semibold text-white">🎯 Mission</h3>
                    </div>
                    <p className="text-white/85 text-base leading-relaxed font-light">
                        To empower businesses with performance-driven digital marketing that builds trust, drives leads, and scales impact.
                    </p>
                </motion.div>

                {/* Vision Card */}
                <motion.div
                    className="flex-1 relative group bg-gradient-to-br from-blue-800/20 to-black/30 border border-blue-600/30 rounded-2xl p-8 shadow-xl overflow-hidden backdrop-blur-md hover:shadow-blue-500/30 transition-shadow z-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute inset-0 border border-blue-500/20 rounded-2xl group-hover:border-blue-500/40 transition-all duration-300 pointer-events-none" />

                    <div className="flex items-center gap-4 mb-6">
                        <FaEye className="text-blue-400 text-3xl" />
                        <h3 className="text-2xl font-semibold text-white">👁️ Vision</h3>
                    </div>
                    <p className="text-white/85 text-base leading-relaxed font-light">
                        To become India’s most trusted digital growth partner for local and global brands alike.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MissionVision;
