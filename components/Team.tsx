"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Harshal Patil",
    role: "Frontend Developer",
    img: "/DUMMY .jpg",
  },
  {
    id: 1,
    name: "Harshal Patil",
    role: "Frontend Developer",
    img: "/DUMMY .jpg",
  },
  {
    id: 1,
    name: "Harshal Patil",
    role: "Frontend Developer",
    img: "/DUMMY .jpg",
  },
  {
    id: 1,
    name: "Harshal Patil",
    role: "Frontend Developer",
    img: "/DUMMY .jpg",
  },
];

export default function Team() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center ">
        <h1 className="heading ">
          Our
          <span className="text-purple"> Team</span>
        </h1>

        <div className="grid grid-cols-1 pt-[60px] sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="p-6 rounded-2xl shadow-md border"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src={member.img}
                alt={member.name}
                width={200}
                height={200}
                className=" mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-9">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum facilis vero asperiores atque laboriosam, excepturi est placeat necessitatibus odio! Qui incidunt hic quidem quaerat molestias mollitia odio facere ducimus error.</p>
      </div>
    </section>
  );
}
