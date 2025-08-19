import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

export const LeadMagnet = () => {
  return (
    <div className="flex flex-col items-center pt-[8rem] ">
      <h1 className="sub-heading lg:max-w-[55vw]">
        Let’s Grow Your <span className="text-purple">Business<br /></span>

      </h1>
      <h2 className='sub-heading lg:max-w-[55vw] pt-4'>
        Book a Free Strategy Call
      </h2>
      <p className="text-white-200 md:mt-10 my-5 text-center font-poppins">
        Get 3 custom growth strategies for your business — absolutely free. No obligations, just real insights.
      </p>
      <a href="mailto:patilharshal2122@gmail.com">
        <MagicButton
          title="Book"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
  )
}
