import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

export const LeadMagnet = () => {
  return (
    <div className="flex flex-col items-center pt-[8rem]
     bg-gradient-to-t rounded-lg from-[#5d16ea]  to-gray-950
     pb-8
     ">
      <h1 className="sub-heading lg:max-w-[55vw]">
        Let’s Grow Your <span className="">Business<br /></span>

      </h1>
      <h2 className='sub-heading lg:max-w-[55vw] pt-4'>
        Book a Free Strategy Call
      </h2>
      <p className="text-white-200 md:mt-10 my-5 text-center font-poppins">
        Get 3 custom growth strategies for your business — absolutely free. No obligations, just real insights.
      </p>
      <a href="mailto:patilharshal2122@gmail.com">
        <MagicButton
          otherClasses='text-[#5d16ea] bg-white text-[1.3rem]'
          title="Book Now"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
  )
}
