"use client";

import React from "react";
import { FaLocationArrow, FaCheck } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Button } from "./ui/MovingBorders";

const pricingPlans = [
  {
    id: 1,
    title: "Proven ROI",
    price: "We don’t just deliver impressions — we drive growth.",
    features: [
      "100's of lead generated monthly",
      "4x reach  for local brands",
    ],
  },
  {
    id: 2,
    title: "Creative Powerhouse",
    price: "Scroll-stopping content crafted by our in-house strategists, designers, and creators.",
    features: [
      "300+ creatives delivered monthly",
      "40+ reels produced for ad campaigns",
    ],
  },
  {
    id: 3,
    title: "Tranparent Pricing",
    price: "No hidden fees. No fluff. Just clear, value-packed pricing.",
    features: [
      "100% clarity in package structure",
      "60%+ average ROI",
    ],
  },
];

const WhyChoose = () => {
  return (
    <div className="py-20 w-full">
      <div>
        <h1 className="heading">
          Why Choose <span className="text-purple"> Us</span>
        </h1>
        <p className="text-center text-gray-400 mt-3 font-poppins">
          Creative minds. Stategic execution. Proven result.
        </p>

        <div className="w-full mt-12 grid grid-cols-3 gap-10">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              style={{
                background: "rgb(4,7,29)",
                backgroundImage:
                  "background: linear-gradient(90deg, #fff 0%, #5d16ea 100%);",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10 gap-4">
                <div>
                  <h1 className="text-start text-2xl font-bold">
                    {plan.title}
                  </h1>
                  <p className="text-start text-gray-400 text-sm mt-2 font-semibold font-poppins">
                    {plan.price}
                  </p>
                </div>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <FaCheck className="text-green-400" /> {feature}
                    </li>
                  ))}
                </ul>
                {/* <div className="mt-6 text-center">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold">
                    Get Started
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <MagicButton
            title="Let's Grow Your Brand"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
