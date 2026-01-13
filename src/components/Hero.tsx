import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export function Hero() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play might be blocked
      });
    }
  }, []);

  return (
    <section className="relative h-[100vh] sm:h-screen flex flex-col items-center justify-center overflow-hidden font-['Montserrat']">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-section/video_01.mp4" type="video/mp4" />
        </video>
        {/* Mobile-only overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 sm:hidden z-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center h-full pt-32 sm:pt-20 pb-20 sm:pb-0">
        <div className="flex flex-col items-center text-center space-y-10 sm:space-y-16">
          <div className="space-y-8 sm:space-y-12 relative flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-black leading-none tracking-tighter flex flex-col items-center select-none uppercase text-center">
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/40 [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] drop-shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                Bring Your
              </span>
              <span className="relative inline-block px-4 -mx-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_0_40px_rgba(233,30,99,0.4)] italic mt-2">
                Visions to Life
              </span>
            </h1>

            <div className="relative max-w-4xl animate-fade-in-up [animation-delay:0.8s]">
              <p className="text-white/95 text-lg sm:text-xl lg:text-3xl leading-relaxed font-bold tracking-wider text-center px-4 sm:px-6 [text-shadow:_0_4px_15px_rgba(0,0,0,0.7)] group">
                <span className="opacity-70 font-light italic block sm:inline">Precision in Every Pixel</span>
                <span className="mx-4 text-[#E91E63] inline-block sm:inline">•</span>
                <span className="inline sm:inline">Excellence in Every Print</span>
                <br />
                <span className="text-white/60 font-black uppercase text-[10px] sm:text-xs lg:text-base tracking-[0.4em] mt-3 sm:mt-4 block">Next Generation Digital Solutions</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 lg:gap-10 items-center justify-center w-full px-6 sm:px-0">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-[#1b63bb] to-[#E91E63] text-white px-8 py-5 sm:px-10 sm:py-7 lg:px-14 lg:py-8 text-base sm:text-lg lg:text-xl rounded-full transition-all duration-500 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(233,30,99,0.4)] font-bold flex items-center justify-center gap-3 w-full sm:w-[280px] lg:w-[320px] active:scale-95"
              onClick={() => window.location.href = '/services'}
            >
              <span className="relative z-10">Explore Services</span>
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite] transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-5 sm:px-10 sm:py-7 lg:px-14 lg:py-8 text-base sm:text-lg lg:text-xl rounded-full border border-white/30 text-white hover:border-white hover:bg-white/10 backdrop-blur-md transition-all duration-300 font-bold w-full sm:w-[280px] lg:w-[320px] flex items-center justify-center active:scale-95 shadow-lg"
              onClick={() => window.location.href = '/about-us'}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}