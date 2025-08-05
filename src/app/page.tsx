// File: app/page.tsx (or pages/index.tsx depending on your Next.js version)

import React from 'react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center relative overflow-hidden">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
          WE BUILD <br /> DIGITAL <span className="text-purple-500">GROWTH.</span>
        </h1>
        <p className="mt-4 max-w-xl text-gray-300">
          Helping brands accelerate their digital journey with creative strategy, design & marketing.
        </p>
        <div className="mt-6 flex gap-4">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-full">Let’s Talk</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full">Our Services</Button>
        </div>
        {/* Floating spheres (placeholders) */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-purple-500 rounded-full blur-2xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl opacity-20 animate-bounce" />
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-black text-white">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {['Performance Marketing', 'Paid Ads (Meta/Google)', 'Social Media Management', 'SEO & Content Strategy'].map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-purple-500 transition duration-300"
            >
              <p className="text-lg font-medium text-center text-yellow-300">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6 bg-black">
        <h2 className="text-3xl font-semibold text-center mb-12 text-white">Case Studies</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl text-white">
            <h3 className="text-2xl font-bold">+480% ROI</h3>
            <p className="text-sm text-gray-400 mt-2">Performance-driven growth campaign</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl text-white">
            <h3 className="text-2xl font-bold">5M Reach in 3 months</h3>
            <p className="text-sm text-gray-400 mt-2">High-impact social strategy</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-black text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
        <p className="text-center max-w-2xl mx-auto text-gray-400">
          We are a team of marketers, designers, and strategists committed to driving digital success and delivering measurable results.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="w-24 h-24 rounded-full bg-zinc-800 border border-zinc-700" />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-black text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Name" className="p-3 rounded bg-zinc-800 border border-zinc-700 text-white" />
          <input type="email" placeholder="Email" className="p-3 rounded bg-zinc-800 border border-zinc-700 text-white" />
          <input type="text" placeholder="Budget" className="p-3 rounded bg-zinc-800 border border-zinc-700 text-white" />
          <textarea placeholder="Message" className="p-3 rounded bg-zinc-800 border border-zinc-700 text-white h-32" />
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 py-3 rounded">Start Project</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-black text-center text-gray-600 text-sm">
        © 2025 YourAgencyName. All rights reserved.
      </footer>
    </main>
  );
}
