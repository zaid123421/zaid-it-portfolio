'use client';

import { LuMail, LuPhone, LuSend, LuLinkedin, LuGithub, LuTwitter } from "react-icons/lu";
import { SectionProps } from "../types/sections";

export default function ContactSection({ id }: SectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00d2ff]/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6">

        <div className="flex flex-col mb-12 md:mb-16">
          <div className="flex items-center gap-3 md:gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tighter uppercase whitespace-nowrap">
              <span className="text-[#00d2ff] font-mono text-xl md:text-2xl mr-1 md:mr-2">04.</span>
              Contact
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00d2ff]/50 to-transparent"></div>
          </div>
          <p className="text-gray-500 font-mono text-xs md:text-sm mt-4 ml-8 md:ml-12">
              Ready to discuss your next technical challenge
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div className="space-y-8 md:space-y-12 order-2 lg:order-1">
            <div className="max-w-md">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Let&apos;s talk about the next big thing.</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Whether you have a question about a technical architecture, a project proposal, or just want to say hi, my inbox is always open.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center text-[#00d2ff] group-hover:border-[#00d2ff]/50 transition-all">
                  <LuMail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] text-gray-500 uppercase font-mono tracking-widest">Email_Address</p>
                  <p className="text-white font-medium text-sm md:text-base truncate">zaid.malkat@dev.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center text-[#00d2ff] group-hover:border-[#00d2ff]/50 transition-all">
                  <LuPhone size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-mono tracking-widest">Phone_Line</p>
                  <p className="text-white font-medium text-sm md:text-base">+971 99 999 9999</p>
                </div>
              </div>
            </div>

            <div className="pt-4 md:pt-8 flex gap-4">
              {[
                { icon: <LuLinkedin />, label: "LinkedIn" },
                { icon: <LuGithub />, label: "GitHub" },
                { icon: <LuTwitter />, label: "Twitter" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  aria-label={social.label}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00d2ff] hover:border-[#00d2ff] transition-all bg-white/5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-[#111] p-6 md:p-8 rounded-2xl border border-white/5 relative order-1 lg:order-2">
            <div className="absolute -top-[1px] left-6 md:left-10 w-16 md:w-20 h-[2px] bg-[#00d2ff]"></div>
            
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">Your_Name</label>
                  <input 
                    type="text" 
                    placeholder="Zaid Malkat"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-3 text-white focus:border-[#00d2ff]/50 outline-none transition-all font-mono text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">Your_Email</label>
                  <input 
                    type="email" 
                    placeholder="zaid@example.com"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-3 text-white focus:border-[#00d2ff]/50 outline-none transition-all font-mono text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">Subject_Line</label>
                <input 
                  type="text" 
                  placeholder="System Architecture Inquiry"
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-3 text-white focus:border-[#00d2ff]/50 outline-none transition-all font-mono text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">Message_Body</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-3 text-white focus:border-[#00d2ff]/50 outline-none transition-all font-mono text-sm resize-none"
                ></textarea>
              </div>

              <button className="w-full flex items-center justify-center gap-3 bg-[#00d2ff] text-black font-bold py-3.5 md:py-4 rounded-lg hover:bg-white transition-all duration-300 group shadow-[0_0_20px_rgba(0,210,255,0.2)] active:scale-[0.98]">
                <LuSend size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span className="text-sm md:text-base uppercase tracking-wider">Send_Message</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}