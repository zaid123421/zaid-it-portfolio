'use client';

import { LuTerminal, LuCpu, LuCode, LuRocket } from "react-icons/lu";
import { SectionProps } from "../types/sections";

export default function AboutSection({ id }: SectionProps) {
  const stats = [
    { icon: <LuCode className="text-[#00d2ff]" />, label: "Experience", value: "5+ Years" },
    { icon: <LuCpu className="text-[#00d2ff]" />, label: "Tech Stack", value: "Full-Stack" },
    { icon: <LuRocket className="text-[#00d2ff]" />, label: "Projects", value: "40+ Done" },
  ];

  return (
    <section id={id} className="relative py-16 md:py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tighter uppercase whitespace-nowrap">
            <span className="text-[#00d2ff] font-mono text-xl md:text-2xl mr-1 md:mr-2">01.</span>
            About_Me
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00d2ff]/50 to-transparent"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          <div className="lg:col-span-8 space-y-6 order-1">
            <div className="relative group p-6 md:p-8 rounded-2xl bg-[#111] border border-white/10 overflow-hidden">
              <LuTerminal className="hidden sm:block absolute top-4 right-4 text-gray-700 text-xl" />
              
              <div className="relative z-10 space-y-4 font-sans text-gray-300 text-base md:text-lg leading-relaxed">
                <p>
                  Hello! I&apos;m <span className="text-white font-bold">Zaid Malkat</span>, a dedicated IT professional 
                  with a passion for creating high-performance digital architectures. My journey in technology 
                  started with a deep curiosity about how complex systems communicate.
                </p>
                
                <p>
                  Today, I specialize in <span className="text-[#00d2ff]">Full-Stack Development</span> and 
                  <span className="text-[#00d2ff]"> System Integration</span>. I don&apos;t just write code; I design 
                  solutions that are scalable, secure, and user-centric.
                </p>

                <p className="text-sm md:text-base">
                  When I&apos;m not debugging or architecting new features, you&apos;ll find me exploring the latest 
                  trends in DevOps or contributing to open-source projects.
                </p>
              </div>

              <div className="mt-8 md:mt-10 pt-6 border-t border-white/5">
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] mb-4">Core_Technologies</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {['React.js', 'Next.js', 'Node.js', 'TypeScript', 'Docker', 'AWS'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#0a0a0a] border border-white/10 text-gray-400 text-xs md:text-sm hover:border-[#00d2ff] hover:text-[#00d2ff] transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4 order-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="p-5 md:p-6 rounded-xl bg-[#111] border border-white/5 hover:border-[#00d2ff]/30 transition-all group"
                >
                  <div className="flex flex-row lg:flex-row items-center gap-4">
                    <div className="p-3 rounded-lg bg-[#00d2ff]/5 group-hover:bg-[#00d2ff]/20 transition-colors shrink-0">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                      <div className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest font-mono">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 md:p-6 rounded-xl bg-gradient-to-br from-[#00d2ff]/10 to-transparent border border-[#00d2ff]/20 mt-2 md:mt-6">
              <p className="text-xs md:text-sm text-gray-300 font-mono italic">
                &quot;Focused on building scalable systems and optimizing cloud infrastructure.&quot;
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute right-[-10%] bottom-[-5%] opacity-[0.02] text-white font-mono text-[5rem] md:text-[10rem] pointer-events-none select-none">
        {"{...}"}
      </div>
    </section>
  );
}