"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import ContactSection from "./components/ContactSection";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    const handleClick = (e: Event) => {
      const currentTarget = e.currentTarget as HTMLAnchorElement;
      const href = currentTarget.getAttribute("href");
      
      if (!href?.startsWith("#")) return;
      
      e.preventDefault();
      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      
      if (target) {
        const headerHeight = document.querySelector("header")?.offsetHeight || 0;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    };

    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      observer.disconnect();
      links.forEach((link) => link.removeEventListener("click", handleClick));
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <HeroSection id="home" />
      <AboutSection id="about" />
      <TechStackSection id="skills" />
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
    </>
  );
}
