import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] flex justify-center items-center ">
          {/* <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="/assets/bgvideo.mp4" type="video/mp4" />
  </video> */}

      <div className="relative z-10 w-[50%] flex flex-col gap-3 ">
        <h1 className="font-bold text-7xl">
          WE BUILD DIGITAL <span className="text-gradient">GROWTH.</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          incidunt ipsum harum beatae modi vitae vero distinctio, nesciunt nihil
          quis perferend
        </p>
        <div className="flex items-center gap-5">
             <button className="button-secondary text-sm shadow-lg">
            Let's Talk
          </button>
          <button className="button-secondary text-sm shadow-lg">our service</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
