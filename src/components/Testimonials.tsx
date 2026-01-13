import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [{
  name: 'Chandana Lakmal Rubasinghe',
  image: '/testimonials/test01.jpeg',
  role: 'Customer',
  quote: 'Highly recommended. Excellent service with outstanding quality finished products. Thank you to the entire team.'
}, {
  name: 'Subhash Gunawardhane',
  image: '/testimonials/test02.jpeg',
  role: 'Customer',
  quote: 'Excellent service with prompt responses. DIGITAL Point delivers high-quality printing and advertising products at affordable prices. Friendly staff, flexible pricing, on-time delivery. Highly recommended.'
}, {
  name: 'Sampath Lanka Oil Mart',
  image: '/testimonials/test03.jpeg',
  role: 'Partner',
  quote: 'Highly professional service with excellent quality finished products. Very satisfied with the overall experience. Strongly recommended.'
}, {
  name: 'Simarol Car Care',
  image: '/testimonials/test04.jpeg',
  role: 'Partner',
  quote: 'Great service, timely delivery, and top-quality results. The team was supportive and professional throughout. Highly recommended.'
}];

export function Testimonials() {
  return <section className="py-32 bg-[#050505] relative overflow-hidden font-['Montserrat']">
    {/* Shine/Glow Effects */}
    <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-blue-900/10 rounded-full blur-[120px] -translate-y-1/2" />
    <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-pink-900/10 rounded-full blur-[120px] translate-y-1/2" />
    <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#111] to-black opacity-80" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center space-y-3 mb-16 md:mb-32">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase">
          <span className="block text-white leading-none">Client</span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] bg-[length:200%_auto] animate-gradient-x italic pb-2 px-2 pr-6">
            Testimonials
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#1b63bb] to-[#E91E63] mx-auto rounded-full" />
        <p className="text-gray-400 text-sm lg:text-base font-bold max-w-3xl mx-auto tracking-[0.15em] uppercase">
          <span className="block sm:inline"><span className="text-white font-black">Trusted</span> Voices</span>
          <span className="hidden sm:inline-block mx-4 text-[#E91E63]">•</span>
          <span className="inline sm:inline"><span className="text-white font-black">Proven</span> Results</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2 opacity-50" />
            <div className="bg-[#111] p-6 md:p-8 rounded-2xl border border-[#E91E63]/30 relative h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2">

              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-[#1b63bb] to-[#E91E63] rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                <Quote className="w-5 h-5 text-white fill-current" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#E91E63] transition-colors duration-300">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover transition-all duration-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-1 font-bold">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed flex-grow relative z-10 italic">
                "{testimonial.quote}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>;
}