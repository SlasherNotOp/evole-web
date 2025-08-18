import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const phases = [
  {
    title: "Marketing & Research",
    des: "We start with in-depth research, audience analysis, and market positioning to set a strong foundation for your brand.",
    icon: "Phase 1",
    bg: "bg-emerald-900",
  },
  {
    title: "Planning & Strategy",
    des: "We collaborate to map out goals, site structure, navigation, and content requirements tailored to your brand.",
    icon: "Phase 2",
    bg: "bg-pink-900",
  },
  {
    title: "Design & Prototyping",
    des: "Wireframes and mockups are transformed into stunning, user-centric designs that reflect your brand identity.",
    icon: "Phase 3",
    bg: "bg-indigo-900",
  },
  {
    title: "Development & Testing",
    des: "From front-end to back-end, we bring your project to life with clean, scalable code and rigorous testing.",
    icon: "Phase 4",
    bg: "bg-sky-600",
  },
  {
    title: "Launch & Growth",
    des: "We launch your product and continue optimizing through analytics, SEO, and marketing to fuel long-term growth.",
    icon: "Phase 5",
    bg: "bg-purple-900",
  },
];

const Approach = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % phases.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + phases.length) % phases.length);

  return (
    <section className="w-full py-20 flex flex-col items-center">
      <h1 className="heading">
        Our <span className="text-purple">Approach</span>
      </h1>

      <div className="w-full h-[35rem] flex items-center justify-center mt-10">
        {/* Left Arrow */}
        <button onClick={prev} className="p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Card
              title={phases[current].title}
              des={phases[current].des}
              icon={phases[current].icon}
              bg={phases[current].bg}
            />
          </motion.div>
        </AnimatePresence>

        {/* Right Arrow */}
        <button onClick={next} className="p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Approach;

// ✅ Plain Card (no inner animations)
// ✅ Plain Card with bottom-corner image overlay
const Card = ({
  title,
  icon,
  des,
  bg,
}: {
  title: string;
  icon: string;
  des: string;
  bg: string;
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center text-center 
      w-full mx-auto p-10 lg:h-[30rem] rounded-3xl overflow-hidden ${bg}`}
    >
      {/* Phase Badge */}
      <div className="mb-6 flex justify-center">
        <PhaseBadge order={icon} />
      </div>

      {/* Content */}
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <p className="text-sm mt-4 text-gray-200 max-w-lg">{des}</p>

      {/* ✅ Bottom corner image overlay */}
      <img
        src="/3.svg" // replace with your image path
        alt="decorative shape"
        className="absolute bottom-[-20px] right-0 w-32  pointer-events-none"
      />
    </div>
  );
};


// ✅ Simple Phase Badge
const PhaseBadge = ({ order }: { order: string }) => {
  return (
    <div className="px-6 py-2 rounded-full bg-black/40 border border-white/20 text-white font-semibold">
      {order}
    </div>
  );
};
