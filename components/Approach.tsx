import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

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

      <div className=" w-full  h-[35rem] flex items-center justify-center mt-10">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className=" p-5"
        >
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
              icon={<AceternityIcon order={phases[current].icon} />}
              bg={phases[current].bg}
            />
          </motion.div>
        </AnimatePresence>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="  p-5  "
        >
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

// ✅ Card Component (animation always on, no hover needed)
const Card = ({
  title,
  icon,
  children,
  des,
  bg,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
  bg: string;
}) => {
  return (
    <div
      className="relative border border-black/[0.2] flex items-center justify-center
       dark:border-white/[0.2] w-full mx-auto p-4 lg:h-[35rem] rounded-3xl 
       bg-[linear-gradient(90deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] overflow-hidden"
    >
      {/* CanvasRevealEffect always active */}
      <div className="absolute inset-0">
        <CanvasRevealEffect
          animationSpeed={3.5}
          containerClassName={`${bg} rounded-3xl overflow-hidden`}
        />
      </div>

      <div className="relative z-20 px-10 text-center">
        <div className="mb-6 flex justify-center">{icon}</div>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-sm mt-4 text-gray-300">{des}</p>
      </div>
    </div>
  );
};

// ✅ Phase Number Badge
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span
          className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full items-center justify-center 
          rounded-full bg-slate-950 px-5 py-2 text-purple 
          backdrop-blur-3xl font-bold text-xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};
