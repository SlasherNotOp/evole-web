import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// Random floating fragments
const FloatingFragment = ({
  delay,
  x,
  y,
}: {
  delay: number;
  x: string;
  y: string;
}) => {
  return (
    <motion.div
      className="absolute w-3 h-3 rounded-full bg-purple-500/70 blur-sm"
      style={{ top: y, left: x }}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: [0, -20, 0],
        opacity: [0, 1, 0.5, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative ">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid + Mask */}
      <div
        className="h-screen w-full 
        dark:bg-black-100
         bg-white 
        dark:bg-[url('/bg/ball.png')]
        
        bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center 
          dark:bg-black-100 bg-white 
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Floating fragments */}
      <FloatingFragment delay={0} x="20%" y="30%" />
      <FloatingFragment delay={2} x="60%" y="50%" />
      <FloatingFragment delay={4} x="80%" y="20%" />
      <FloatingFragment delay={1.5} x="40%" y="70%" />
      <FloatingFragment delay={3} x="10%" y="60%" />

      {/* Hero content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-3">
          <TextGenerateEffect
            flag={false}
            words={`HELPING BRANDS GROW DIGITALLY.`}
            className="text-center text-[40px] md:text-5xl lg:text-7xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl font-poppins">
            Full-service digital marketing agency, helping yours business grow online
          </p>

          <motion.div
            className="flex gap-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <MagicButton
                title="Book Free Strategy Call"
                icon={<FaLocationArrow />}
                position="right"
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <MagicButton
                title="See Our Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
