'use client';

import { useEffect, useState } from "react";
import { LuGithub, LuChevronRight } from "react-icons/lu";

type Props = {
  activeSection: string;
};

export default function Header({ activeSection }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-[100] transition-all duration-500
        ${scrolled 
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" 
          : "bg-transparent py-6"}
      `}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer font-mono z-[110]">
          <div className="w-8 h-8 bg-[#00d2ff] rounded flex items-center justify-center text-black font-bold text-xl transition-transform group-hover:rotate-12">
            Z
          </div>
          <span className="text-white text-xl font-black tracking-tighter">
            Malkat<span className="text-[#00d2ff]">.</span>dev
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`
                  relative text-[10px] lg:text-xs font-mono uppercase tracking-[0.2em] transition-all duration-300
                  ${isActive ? "text-[#00d2ff]" : "text-gray-400 hover:text-white"}
                `}
              >
                <span className="text-[#00d2ff]/50 mr-1 opacity-0 group-hover:opacity-100 transition-opacity">#</span>
                {section.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#00d2ff] shadow-[0_0_10px_#00d2ff]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Button (Desktop) */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="flex items-center gap-2 px-4 py-2 border border-[#00d2ff]/30 text-[#00d2ff] text-[10px] font-mono rounded bg-[#00d2ff]/5 hover:bg-[#00d2ff] hover:text-black transition-all duration-500 shadow-inner"
          >
            <LuGithub size={14} /> GET_IN_TOUCH
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden z-[110] relative p-2 text-white" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col gap-1.5 items-end">
            <span className={`h-0.5 bg-[#00d2ff] transition-all duration-300 ${menuOpen ? "w-8 rotate-45 translate-y-2" : "w-8"}`} />
            <span className={`h-0.5 bg-[#00d2ff] transition-all duration-300 ${menuOpen ? "opacity-0" : "w-5"}`} />
            <span className={`h-0.5 bg-[#00d2ff] transition-all duration-300 ${menuOpen ? "w-8 -rotate-45 -translate-y-2" : "w-6"}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-[#0a0a0a] z-[105] flex flex-col px-8 pt-32
        transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] md:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        {/* Background Decorative Text */}
        <div className="absolute top-10 left-10 text-white/5 font-mono text-8xl font-black pointer-events-none select-none">
          MENU
        </div>

        <div className="space-y-8 relative">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between text-3xl font-bold text-white hover:text-[#00d2ff] transition-colors tracking-tighter"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm text-[#00d2ff]">0{index + 1}.</span>
                {section.label}
              </div>
              <LuChevronRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </a>
          ))}
        </div>

        {/* Mobile Socials/CTA */}
        <div className="mt-auto mb-16 space-y-6">
          <div className="h-[1px] w-full bg-white/10" />
          <a 
            href="https://github.com" 
            className="flex items-center justify-center gap-3 w-full py-4 bg-[#00d2ff] text-black font-bold rounded-lg shadow-[0_0_20px_rgba(0,210,255,0.2)]"
          >
            <LuGithub size={20} /> VIEW_GITHUB_PROFILE
          </a>
        </div>
      </div>
    </header>
  );
}