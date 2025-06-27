import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e1b29] to-[#0f172a] flex items-center justify-center px-6 py-16 relative overflow-hidden text-white">
      {/* Background floating glows */}
      <div className="absolute w-72 h-72 bg-purple-700 opacity-30 rounded-full filter blur-3xl animate-pulse -top-32 -left-32 z-0" />
      <div className="absolute w-72 h-72 bg-pink-700 opacity-30 rounded-full filter blur-3xl animate-pulse -bottom-32 -right-32 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-10 shadow-xl">
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-glow">
          Harsha Agrawal
        </h1>

        {/* Typing Text */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Passionate about{" "}
          <span className="text-blue-400 font-semibold animate-typing whitespace-nowrap overflow-hidden border-r-2 border-blue-300">
            Software Dev, ML & Full-Stack Magic.
          </span>
        </p>

        {/* Resume Button */}
        <div className="mb-10">
          <a
            href="/resume-harsha.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 text-gray-400">
          <a
            href="https://github.com/harshaagrawal20"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-125 transition duration-300"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/harsha-agrawal-a56864290/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-125 transition duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:harshaagarwal820@gmail.com"
            className="hover:text-white hover:scale-125 transition duration-300"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
