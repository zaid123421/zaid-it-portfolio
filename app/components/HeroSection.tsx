'use client';

import { LuCode, LuDownload, LuTerminal, LuArrowRight } from "react-icons/lu";
import { SectionProps } from "../types/sections";
import Image from "next/image";

export default function HeroSection({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#00d2ff]/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-10 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">
        
        <div className="text-center lg:text-left max-w-3xl order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/5 text-[#00d2ff] text-[10px] md:text-xs font-mono mb-6 animate-bounce">
            <LuTerminal size={14} />
            <span className="tracking-wider uppercase">Available for new projects</span>
          </div>

          <h2 className="text-gray-300 text-lg md:text-2xl font-mono mb-3">
            Hi, my name is <span className="text-[#00d2ff] font-bold">Zaid Malkat</span>
          </h2>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
            I BUILD <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-blue-500">
              DIGITAL SOLUTIONS
            </span>
          </h1>

          <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-mono">
            Full Stack Developer specializing in building exceptional digital experiences. 
            Focused on performance, security, and scalable architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-[#00d2ff] text-black px-8 py-3.5 rounded-md font-bold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,210,255,0.3)] active:scale-95"
            >
              View My Work
              <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-md font-bold hover:bg-white/10 transition-all duration-300 active:scale-95"
            >
              <LuDownload size={18} />
              Download CV
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 animate-float mt-8 lg:mt-0">
          <div className="absolute -inset-3 border border-[#00d2ff]/20 rounded-2xl rotate-3"></div>
          <div className="absolute -inset-3 border border-blue-500/20 rounded-2xl -rotate-3"></div>
          
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-grid-white/[0.02] z-10"></div>
            
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
              <Image 
                src="/your-image-path.png" 
                alt="Zaid Malkat" 
                fill
                priority
                sizes="(max-width: 768px) 224px, (max-width: 1024px) 320px, 400px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform hover:scale-110"
              />
              
              <div className="absolute bottom-3 right-3 md:bottom-6 md:right-6 bg-[#0a0a0a]/90 p-2 md:p-4 rounded-xl border border-[#00d2ff]/40 backdrop-blur-md z-20 shadow-xl">
                <LuCode className="text-[#00d2ff] text-xl md:text-3xl" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}