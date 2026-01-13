import React from 'react';

export function VideoSection() {
  return (
    <section className="pt-8 lg:pt-12 pb-0 bg-white relative">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="-mb-24 relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-[21/8] group cursor-pointer z-30 bg-gray-100"
        >
          <img
            src="/home-image/home01.png"
            alt="Printing Services"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20" />
        </div>
      </div>
    </section>
  );
}