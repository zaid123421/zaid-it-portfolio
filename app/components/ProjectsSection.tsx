'use client';

import Image from "next/image";
import { LuGithub, LuExternalLink, LuFolderCode } from "react-icons/lu";
import { SectionProps } from "../types/sections";

export default function ProjectsSection({ id }: SectionProps) {
  const projects = [
    {
      title: "Cloud-Sync Platform",
      description: "A real-time data synchronization engine built with Node.js and Redis, ensuring sub-100ms latency across global clusters.",
      image: "/p1.png",
      tech: ["Node.js", "Redis", "Docker", "AWS"],
      github: "https://github.com",
      link: "https://demo.com"
    },
    {
      title: "AI Analysis Dashboard",
      description: "SaaS dashboard for predictive analytics using TensorFlow and Next.js, featuring automated report generation and real-time visualization.",
      image: "/p2.png",
      tech: ["Next.js", "TensorFlow", "Tailwind", "PostgreSQL"],
      github: "https://github.com",
      link: "https://demo.com"
    },
    {
      title: "Cyber-Secure Gateway",
      description: "An open-source security middleware for Express.js that implements advanced rate-limiting and JWT-based authentication layers.",
      image: "/p3.png",
      tech: ["TypeScript", "Express", "JWT", "Jest"],
      github: "https://github.com",
      link: "https://demo.com"
    }
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col mb-12 md:mb-16">
          <div className="flex items-center gap-3 md:gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tighter uppercase whitespace-nowrap">
              <span className="text-[#00d2ff] font-mono text-xl md:text-2xl mr-1 md:mr-2">03.</span>
              Projects
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00d2ff]/50 to-transparent"></div>
          </div>
          <p className="text-gray-500 font-mono text-xs md:text-sm mt-4 ml-8 md:ml-12 max-w-md">
              Selected works that demonstrate technical architectural skills
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00d2ff]/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-[#00d2ff]/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                
                <div className="absolute top-3 right-3 z-20 flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#0a0a0a]/90 backdrop-blur-md rounded-full text-white hover:text-[#00d2ff] transition-colors border border-white/10 shadow-lg">
                    <LuGithub size={18} />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#0a0a0a]/90 backdrop-blur-md rounded-full text-white hover:text-[#00d2ff] transition-colors border border-white/10 shadow-lg">
                    <LuExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="p-5 md:p-6 space-y-4 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-[#00d2ff] font-mono text-[9px] md:text-[10px] tracking-widest uppercase font-bold">
                  <LuFolderCode className="shrink-0" /> Deployment_Phase
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#00d2ff] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[9px] md:text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/10 text-gray-500 rounded hover:text-[#00d2ff] hover:border-[#00d2ff]/30 transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#00d2ff]/20 to-transparent group-hover:via-[#00d2ff] transition-all duration-700 shrink-0"></div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 md:mt-16 flex justify-center">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 font-mono text-[#00d2ff] border border-[#00d2ff]/30 px-8 py-3.5 rounded-md hover:bg-[#00d2ff]/10 transition-all group active:scale-95">
            <LuTerminal size={18} />
            <span className="text-sm md:text-base">Execute_Load_More()</span>
            <span className="animate-pulse">_</span>
          </button>
        </div> */}

      </div>
    </section>
  );
}