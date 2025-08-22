"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

import WhyChoose from "@/components/WhyChoose";
import { LeadMagnet } from "@/components/LeadMagnet";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Patners from "@/components/Patners";
import Team from "@/components/Team";

// Lazy load sections (code-splitting)
// const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});
const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: false });

interface SectionWrapperProps {
  children: any;
  className?: string;
  id?: string;
}
// Reusable animation wrapper
const SectionWrapper = ({ children, className, id }: SectionWrapperProps) => (
  <motion.section
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className={`w-full ${className}`}
    id={id}
  >
    {children}
  </motion.section>
);

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">


        <Hero cta2="See Our Work" />



        <SectionWrapper>
          <Grid />
        </SectionWrapper>

        <SectionWrapper>
          <Experience />
        </SectionWrapper>

        {/* <SectionWrapper>
          <Pricing />
        </SectionWrapper> */}

        <SectionWrapper>
          <Approach />
        </SectionWrapper>

        {/* <SectionWrapper>
          <RecentProjects />
        </SectionWrapper> */}

        <SectionWrapper>
          <Clients />
        </SectionWrapper>

        {/* <SectionWrapper>
          <Team />
        </SectionWrapper> */}

        {/* <SectionWrapper>
          <Patners />
        </SectionWrapper> */}

        <SectionWrapper className="min-h-[80vh]" id="lead-magnet">
          <LeadMagnet />
        </SectionWrapper>

        {/* <SectionWrapper >
          <Footer />
        </SectionWrapper> */}
      </div>
    </main>
  );
};

export default Home;
