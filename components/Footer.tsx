import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
        {/* Left side: Image + Company content */}
        <div className="flex flex-col items-start text-left">
          <img
            src="/1.png"
            alt="Company Logo"
            className="w-32 h-auto mb-6"
          />
          <p className="text-white-200 mb-6 max-w-md">
            We help businesses grow with modern design, scalable development,
            and smart digital strategies. Let’s bring your next big idea to
            life.
          </p>
          <div className="flex items-center gap-4">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Contact Form */}
        <div className="bg-black-200 p-8 rounded-2xl border border-black-300">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Get in Touch
          </h3>
          <form className="w-full flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black-100 border border-black-300 text-white focus:outline-none focus:ring-2 focus:ring-purple"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-black-100 border border-black-300 text-white focus:outline-none focus:ring-2 focus:ring-purple"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded-lg bg-black-100 border border-black-300 text-white focus:outline-none focus:ring-2 focus:ring-purple resize-none"
              required
            ></textarea>
            {/* Full width button */}
            <div className="w-full">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
        
              />
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center text-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © Evolve Media 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
