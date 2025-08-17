"use client";

import React from "react";
import { FaLocationArrow, FaCheck } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Button } from "./ui/MovingBorders";

const pricingPlans = [
  {
    id: 1,
    title: "Basic",
    price: "₹25K/mo",
    features: [
      "Social media marketing",
      "Paid campaigns",
      "SEO & content strategy",
    ],
  },
  {
    id: 2,
    title: "Growth",
    price: "₹50K/mo",
    features: [
      "Social media marketing",
      "Paid campaigns",
      "SEO & content strategy",
    ],
  },
  {
    id: 3,
    title: "Premium",
    price: "₹85K/mo",
    features: [
      "Social media marketing",
      "Paid campaigns",
      "SEO & content strategy",
      "Dedicated manager",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="py-20 w-full">
      <div>
        <h1 className="heading">
          Flexible <span className="text-purple"> Pricing</span>
        </h1>
        <p className="text-center text-gray-400 mt-3">
          Choose what fits your growth stage.
        </p>

        <div className="w-full mt-12 grid grid-cols-3 gap-10">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              style={{
                background: "rgb(4,7,29)",
                backgroundImage:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10 gap-4">
                <div>
                  <h1 className="text-start text-2xl font-bold">
                    {plan.title}
                  </h1>
                  <p className="text-start text-yellow-400 text-xl mt-2 font-semibold">
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
                <div className="mt-6 text-center">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <MagicButton
            title="Let's Build Your Brand"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
