import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import Link from 'next/link'

export const LeadMagnet = ({
  heading1 = "Let’s Grow Your Business",
  heading2 = "Book a Free Strategy Call",
  subText = "Get 3 custom growth strategies for your business — absolutely free. No obligations, just real insights.",
  btnText = "Book Now"
}: {
  heading1?: string,
  heading2?: string,
  subText?: string,
  btnText?: string
}) => {
  return (
    <div className="flex flex-col items-center pt-[8rem]
     bg-gradient-to-t rounded-lg from-[#5d16ea]  to-gray-950
     pb-8
     ">
      <h1 className="sub-heading lg:max-w-[55vw]">
        {heading1}<br />

      </h1>
      <h2 className='sub-heading lg:max-w-[55vw] pt-4'>
        {heading2}
      </h2>
      <p className="text-white-200 md:mt-10 my-5 text-center font-poppins">
        {subText}
      </p>
      <Link href="/contact-us">
        <MagicButton
          otherClasses='text-[#5d16ea] bg-white text-[1.3rem]'
          title={btnText}
          icon={<FaLocationArrow />}
          position="right"
        />
      </Link>
    </div>
  )
}
