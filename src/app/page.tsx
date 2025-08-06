

import Hero from '@/components/hero/Hero';
import OurServices from '@/components/services/OurServices';
import WhyChoose from '@/components/WhyChoose';
import WhyChoose2 from '@/components/WhyChoose2';
import React from 'react';


export default function HomePage() {
  return (
    <div>
      <Hero/>
      <OurServices/>
      {/* <WhyChoose/> */}
      <WhyChoose2/>

    </div>
  );
}
