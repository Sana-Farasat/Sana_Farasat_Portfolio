"use client";

import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-[1500px] mx-auto bg-gradient-to-b from-slate-950 to-black text-white py-12 px-6 md:px-10 border-t border-cyan-500/30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start sm:mx-20">
        
        {/* Left: Logo + Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="group">
            <div className="font-extrabold text-cyan-500 text-5xl md:text-6xl tracking-tight shadow-2xl group-hover:text-cyan-400 transition-colors duration-300">
              SF
            </div>
            <p className="text-cyan-400/80 text-sm md:text-base mt-1 font-medium">
              Sana Farasat
            </p>
          </Link>
        </div>

        {/* Middle: Navigation Links */}
        <div className="flex flex-col justify-evenly items-center">
          <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4 md:mb-6">
            Quick Links
          </h3>
          <nav>
            <ul className="flex flex-col flex-wrap justify-center gap-4 md:gap-6 text-base md:text-lg">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:underline underline-offset-4"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:underline underline-offset-4"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact-us" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:underline underline-offset-4"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:underline underline-offset-4"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/skills" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:underline underline-offset-4"
                >
                  Skills
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right: Contact Details */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4 md:mb-6">
            Get in Touch
          </h3>
          <div className="flex flex-col gap-3 text-gray-300 text-base md:text-lg">
            <a 
              href="mailto:sanafarasat786@gmail.com"
              className="flex items-center gap-3 hover:text-cyan-400 transition-colors group"
            >
              <IoMail className="text-2xl text-cyan-500 group-hover:scale-110 transition-transform" />
              <span className="break-all md:break-normal">Email</span>
            </a>
            
            <a 
              href="https://github.com/Sana-Farasat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400 transition-colors group"
            >
              <FaGithub className="text-2xl text-cyan-500 group-hover:scale-110 transition-transform" />
              <span>Github</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/sana-farasat-b438a22b9/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400 transition-colors group"
            >
              <FaLinkedin className="text-2xl text-cyan-500 group-hover:scale-110 transition-transform" />
              <span> LinkedIn</span>
            </a>


            <a 
              href="https://x.com/sana717_sf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400 transition-colors group"
            >
              <FaTwitter className="text-2xl text-cyan-500 group-hover:scale-110 transition-transform" />
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Line */}
      <div className="mt-10 pt-6 border-t border-cyan-500/20 text-center text-gray-400 text-sm md:text-base">
        <p className="flex items-center justify-center gap-2 text-cyan-400">
          <FaRegCopyright className="inline" />
          {new Date().getFullYear()} Sana Farasat. All Rights Reserved.
        </p>
        <p className="mt-1 text-cyan-400">
          Built with passion & code 💙💙
        </p>
      </div>
    </footer>
  );
}
