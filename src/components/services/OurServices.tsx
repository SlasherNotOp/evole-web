import React from 'react';

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "SOCIAL MEDIA\nMARKETING",
      description: "Strategy, content and management for all social platforms",
      icon: "💬" // You can replace with your actual icon/image
    },
    {
      id: 2,
      title: "CONTENT\nCREATION",
      description: "High-quality reelsand ads that capture attention & engage",
      icon: "✨" // You can replace with your actual icon/image
    },
    {
      id: 3,
      title: "WEBSITE DESIGN\n& DEVELOPMENT",
      description: "Modern, responsive websites tailored to your brand",
      icon: "💻" // You can replace with your actual icon/image
    },
    {
      id: 4,
      title: "SEO",
      description: "Improve your search engine rankings and visibility",
      icon: "🚀" // You can replace with your actual icon/image
    },
    {
      id: 5,
      title: "PERFORMANCE\nMARKETING",
      description: "Data-driven paid campaigns to drive leads and sales",
      icon: "🎯" // You can replace with your actual icon/image
    },
    {
      id: 6,
      title: "BRANDING &\nGRAPHIC DESIGN",
      description: "Creative solutions for a strong and cohesive brand presence",
      icon: "🎨" // You can replace with your actual icon/image
    }
  ];

  return (
    <section className=" py-16 px-4 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            OUR SERVICES
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl font-light max-w-2xl mx-auto">
            We offer a full suite of digital marketing solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800/50 border text-center border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-bold mb-4 leading-tight whitespace-pre-line">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                {service.description}
              </p>

              {/* CTA Button */}
              <button className="w-full bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 text-lg">
                Get a Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;