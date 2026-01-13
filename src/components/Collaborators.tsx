import React from 'react';
const logos = ['A9 Salon', 'Prime College', 'Empire Trading Agency', 'Amrajh Enterprises', 'Sampath Lanka Oil Mart', 'Simarol car care', 'Mobile Planet(PVT)LTD'];

export function Collaborators() {
  return <section className="py-16 bg-white relative z-20 font-['Montserrat']">
    <div className="text-center space-y-3 mb-16 md:mb-32">
      <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase">
        <span className="block text-gray-900 leading-none">Trusted</span>
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] bg-[length:200%_auto] animate-gradient-x italic pb-2 px-2">
          Collaborators
        </span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-[#1b63bb] to-[#E91E63] mx-auto rounded-full" />
      <p className="text-gray-500 text-sm lg:text-base font-bold max-w-3xl mx-auto tracking-[0.15em] uppercase">
        <span className="block sm:inline"><span className="text-gray-900 font-black">Consistent</span> Quality</span>
        <span className="hidden sm:inline-block mx-4 text-[#E91E63]">•</span>
        <span className="inline sm:inline"><span className="text-gray-900 font-black">Professional</span> Printing</span>
      </p>
    </div>

    <div className="md:-mb-28 -mb-32 md:p-6 max-md:pt-20 pt-16 relative z-30 w-full h-[75px] bg-white flex items-center justify-center"> {/* Added flex and centering */}
      {/* Wavy Background Container 1 */}
      <div className="absolute w-full h-1/2 flex items-center justify-center transform -skew-y-6 scale-100 origin-center" > {/* Adjusted top for a small gap */}
        <div className="w-full bg-gray-50 border-y border-black py-3 md:py-6 overflow-hidden">
          <div className="flex space-x-12 animate-[marquee_20s_linear_infinite] md:animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => <div key={`top-${i}`} className="inline-flex items-center justify-center px-8 opacity-80 hover:opacity-100 transition-opacity">
              <span className="text-xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] bg-[length:200%_auto] animate-gradient-x">
                {logo}
              </span>
            </div>)}
          </div>
        </div>
      </div>

      {/* Wavy Background Container 2 */}
      <div className="absolute w-full h-1/2 flex items-center justify-center transform skew-y-6 scale-100 origin-center" > {/* Adjusted bottom for a small gap */}
        <div className="w-full bg-gray-50 border-y border-black py-3 md:py-6 overflow-hidden">
          <div className="flex space-x-12 animate-[marquee-reverse_20s_linear_infinite] md:animate-marquee-reverse whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => <div key={`bottom-${i}`} className="inline-flex items-center justify-center px-8 opacity-80 hover:opacity-100 transition-opacity">
              <span className="text-xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] bg-[length:200%_auto] animate-gradient-x">
                {logo}
              </span>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  </section>;
}
