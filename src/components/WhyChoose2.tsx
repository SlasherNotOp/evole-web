import Image from 'next/image';
import React from 'react';

const WhyChoose2 = () => {
  const data = [
    {
      id: 1,
      title: "Affordable for Small Businesses",
      icon: '/why-choose/why-choose-1.png',
    },
    {
      id: 2,
      title: "Custom Content & Strategy",
      icon: '/why-choose/why-choose-2.png',
    },
    {
      id: 3,
      title: "Quick Turnaround & Local Support",
      icon: '/why-choose/why-choose-3.png',
    },
  ];

  return (
    <div className="bg-black min-h-screen py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-20 text-center">
          Why Choose Evolve Media
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {data.map((service) => (
            <div
              key={service.id}
              className="bg-gray-900/50 w-full max-w-sm backdrop-blur-sm border border-gray-800 rounded-3xl p-10 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:border-purple-500/40 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 text-4xl transform group-hover:scale-125 transition-transform duration-300">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="text-white text-2xl font-semibold leading-snug">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose2;
