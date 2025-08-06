import React from "react";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Performance Marketing",
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="rocket-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          <path
            d="M32 8L38 22L52 18L48 32L62 38L48 44L52 58L38 54L32 68L26 54L12 58L16 44L2 38L16 32L12 18L26 22L32 8Z"
            fill="url(#rocket-gradient)"
            opacity="0.9"
          />
          <path
            d="M28 28L36 20M36 44L28 36M20 32H44"
            stroke="#FFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    // {
    //   id: 2,
    //   title: "Paid Ads",
    //   subtitle: "(Meta/Google)",
    //   icon: (
    //     <svg
    //       width="64"
    //       height="64"
    //       viewBox="0 0 64 64"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <defs>
    //         <linearGradient
    //           id="target-gradient"
    //           x1="0%"
    //           y1="0%"
    //           x2="100%"
    //           y2="100%"
    //         >
    //           <stop offset="0%" stopColor="#8B5CF6" />
    //           <stop offset="50%" stopColor="#A855F7" />
    //           <stop offset="100%" stopColor="#F59E0B" />
    //         </linearGradient>
    //       </defs>
    //       <circle
    //         cx="32"
    //         cy="32"
    //         r="28"
    //         stroke="url(#target-gradient)"
    //         strokeWidth="3"
    //         fill="none"
    //       />
    //       <circle
    //         cx="32"
    //         cy="32"
    //         r="20"
    //         stroke="url(#target-gradient)"
    //         strokeWidth="2"
    //         fill="none"
    //       />
    //       <circle
    //         cx="32"
    //         cy="32"
    //         r="12"
    //         stroke="url(#target-gradient)"
    //         strokeWidth="2"
    //         fill="none"
    //       />
    //       <circle cx="32" cy="32" r="4" fill="url(#target-gradient)" />
    //       <path
    //         d="M20 20L44 44M44 20L20 44"
    //         stroke="url(#target-gradient)"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         opacity="0.6"
    //       />
    //     </svg>
    //   ),
    // },
    {
      id: 3,
      title: "Social Media Management",
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="social-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          <rect
            x="12"
            y="16"
            width="40"
            height="32"
            rx="4"
            stroke="url(#social-gradient)"
            strokeWidth="3"
            fill="none"
          />
          <rect
            x="18"
            y="22"
            width="6"
            height="6"
            rx="1"
            fill="url(#social-gradient)"
          />
          <rect
            x="26"
            y="22"
            width="6"
            height="6"
            rx="1"
            fill="url(#social-gradient)"
            opacity="0.7"
          />
          <rect
            x="34"
            y="22"
            width="6"
            height="6"
            rx="1"
            fill="url(#social-gradient)"
            opacity="0.5"
          />
          <rect
            x="42"
            y="22"
            width="6"
            height="6"
            rx="1"
            fill="url(#social-gradient)"
            opacity="0.3"
          />
          <circle cx="46" cy="18" r="3" fill="url(#social-gradient)" />
          <path
            d="M18 34H46M18 38H38"
            stroke="url(#social-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "SEO & Content Strategy",
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="seo-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          <circle
            cx="28"
            cy="28"
            r="16"
            stroke="url(#seo-gradient)"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M40 40L52 52"
            stroke="url(#seo-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle
            cx="28"
            cy="28"
            r="8"
            fill="url(#seo-gradient)"
            opacity="0.3"
          />
          <path
            d="M24 24L32 32M32 24L24 32"
            stroke="#FFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="48"
            cy="16"
            r="3"
            fill="url(#seo-gradient)"
            opacity="0.7"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="">
        <h2 className=" text-4xl md:text-5xl ">
          Our <span className="text-gradient">Services</span>
        </h2>
      </div>



    {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="card bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition hover:shadow-xl"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>   */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
  {services.map((service)=>(
   <div key={service.id} className="card">
        <div className="flex  items-center gap-1.5">
           <div className="mb-4 ">{service.icon}</div>
              <h4 className="text-[16px] font-semibold mb-2">{service.title}</h4>
        </div>
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem ea aperiam exercitationem accusantium possimus, laudantium sed veritatis ducimus autem? Ea explicabo odio dignissimos temporibus quis unde corporis accusantium id.</p>
        </div>
        <div>
     <a
        href="#"
        className="text-primary font-medium text-sm flex items-center gap-1 hover:underline"
      >
        Learn More <ArrowRight size={16} />
      </a>
  </div>
      </div>
  ))}
     


</div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 min-h-[260px] w-full max-w-xs mx-auto shadow-lg hover:shadow-purple-400/10 transition-all duration-300 hover:scale-[1.03] group"
          >
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="text-purple-400 text-4xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-white text-lg font-semibold leading-tight">
                {service.title}
              </h3>

              {service.subtitle && (
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.subtitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </div> */}
      
    </div>
  );
};

export default ServicesSection;
