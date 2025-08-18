import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Patners = () => {
  const logos = ["/1.svg", "/1.svg", "/1.svg", "/1.svg"];

  return (
    <section className="relative w-full py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h1 className="heading">
          Trusted by
          <span className="text-purple"> Innovative Companies</span>
        </h1>

        <div className="flex justify-center items-center gap-5">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-5">
              <img
                src={logo}
                alt={`Company ${idx + 1}`}
                className="w-[250px] object-contain opacity-80 hover:opacity-100 transition"
              />
              {/* Show X after each logo except the last */}
              {idx < logos.length - 1 && (
                <span className="text-gray-500 text-2xl font-bold">×</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-6 max-w-4xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum minus
          et, labore aut eum sapiente necessitatibus ipsa laboriosam reiciendis,
          culpa optio odit nisi illo laborum eos temporibus quisquam perferendis
          iste!
        </p>

        <MagicButton
          title=" See our case studies"
          icon={<FaLocationArrow />}
          position="right"
        />
      </div>
    </section>
  );
};

export default Patners;
