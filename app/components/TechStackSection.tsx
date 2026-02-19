'use client';

import { 
  LuCode, LuDatabase, LuLayers, LuMonitor, LuServer, LuWrench 
} from "react-icons/lu";
import { SectionProps } from "../types/sections";

export default function TechStackSection({ id }: SectionProps) {
  const stack = [
    {
      category: "Frontend",
      icon: <LuMonitor className="text-[#00d2ff]" />,
      skills: ["React.js", "Next.js 15", "Tailwind CSS", "TypeScript", "Redux"]
    },
    {
      category: "Backend",
      icon: <LuServer className="text-[#00d2ff]" />,
      skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs"]
    },
    {
      category: "DevOps & Tools",
      icon: <LuWrench className="text-[#00d2ff]" />,
      skills: ["Docker", "AWS", "Git/GitHub", "CI/CD", "Vercel"]
    }
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-blue-500/5 blur-[80px] md:blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col mb-12 md:mb-16">
          <div className="flex items-center gap-3 md:gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tighter uppercase whitespace-nowrap">
              <span className="text-[#00d2ff] font-mono text-xl md:text-2xl mr-1 md:mr-2">02.</span>
              Tech_Stack
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00d2ff]/50 to-transparent"></div>
          </div>
          <p className="text-gray-500 font-mono text-xs md:text-sm mt-4 ml-8 md:ml-12 max-w-md">
              Current technologies I use to build production-ready apps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stack.map((group, index) => (
            <div 
              key={index} 
              className="relative p-6 md:p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-[#00d2ff]/20 transition-all duration-500 group overflow-hidden flex flex-col"
            >
              <div className="absolute -right-4 -top-4 w-20 md:w-24 h-20 md:h-24 bg-[#00d2ff]/5 rounded-full blur-2xl group-hover:bg-[#00d2ff]/10 transition-colors"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-[#00d2ff]/10 shrink-0">
                    {group.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-md bg-[#0a0a0a] border border-white/10 text-gray-400 text-[10px] md:text-xs font-mono group-hover:border-[#00d2ff]/40 group-hover:text-white transition-all duration-300"
                    >
                      <span className="text-[#00d2ff] mr-1">#</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00d2ff] group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 p-6 md:p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-1000">
          <LuCode size={30} className="text-white hover:text-[#00d2ff] transition-colors md:w-10 md:h-10" />
          <LuDatabase size={30} className="text-white hover:text-[#00d2ff] transition-colors md:w-10 md:h-10" />
          <LuLayers size={30} className="text-white hover:text-[#00d2ff] transition-colors md:w-10 md:h-10" />
          <span className="text-white font-mono font-bold tracking-[0.2em] md:tracking-[0.5em] text-sm md:text-xl border-l border-white/20 pl-6 md:pl-0 md:border-none">
            2026_CORE
          </span>
        </div>

      </div>
    </section>
  );
}