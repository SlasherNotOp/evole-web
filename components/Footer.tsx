import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-20 pb-10 relative font-poppins" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96 -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-10"
        />
      </div> */}

      {/* Main Section */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12">
        {/* Left: Contact CTA */}
        <div>
          <h2 className="text-3xl font-semibold mb-2">We are here for you!</h2>
          <p className="text-white-300 mb-6">Let’s build something amazing together.</p>
          <MagicButton
            title="Let's connect"
            icon={<FaLocationArrow />}
            position="right"
          // btnStyles="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
          <ul className="space-y-2 text-white-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">News & Insights</a></li>
            <li><a href="#">Board of Directors</a></li>
          </ul>
        </div>

        {/* Our Offerings */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Offerings</h3>
          <ul className="space-y-2 text-white-300">
            <li><a href="#">Equity</a></li>
            <li><a href="#">Private Credit</a></li>
            <li><a href="#">Venture Capital</a></li>
            <li><a href="#">Real Estate</a></li>
          </ul>
        </div>

        {/* Grievance Redressal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Grievance Redressal</h3>
          <ul className="space-y-2 text-white-300">
            <li><a href="#">Grievance Redressal</a></li>
            <li><a href="#">Sebi Scores</a></li>
            <li><a href="#">Online Dispute Resolution</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white-300 opacity-20 my-10"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white-300 text-sm gap-4">
        <p>© 2025 Evolve Media. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#">Disclaimer</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
