"use client";

import "animate.css";
import { FaLayerGroup, FaBrain, FaCode } from "react-icons/fa";
import { SiOpenai, SiHuggingface, SiRender, SiNexon } from "react-icons/si";
import { TbPointerFilled } from "react-icons/tb";
import { motion } from "framer-motion";

function Skills() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-700 dark:text-cyan-500 flex justify-center lg:text-7xl xl:text-8xl p-3">
        My Skills
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-7 max-w-5xl mx-auto overflow-visible">
        {/* ---------------------Headless CMS------------------- */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110 animate-pulse"
            style={{ animationDuration: "2s" }}
          >
            <FaLayerGroup className="text-cyan-400 h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
            <h2 className="text-cyan-400">Headless CMS</h2>
          </motion.div>
        </div>
        {/* ---------------------OpenAI Agents------------------- */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110 animate-pulse"
            style={{ animationDuration: "2s" }}
          >
            <SiOpenai className="text-green-400 h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
            <h2 className="text-green-400">OpenAI Agents</h2>
          </motion.div>
        </div>
        {/* ---------------------Claude Code------------------- */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110 animate-pulse"
            style={{ animationDuration: "2s" }}
          >
            <FaBrain className="text-orange-400 h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
            <h2 className="text-orange-400">Claude Code</h2>
          </motion.div>
        </div>
        {/* ---------------------Cursor AI------------------- */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110 animate-pulse"
            style={{ animationDuration: "2s" }}
          >
            <TbPointerFilled className="text-purple-400 h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
            <h2 className="text-purple-400">Cursor AI</h2>
          </motion.div>
        </div>
        {/* ---------------------Speckit Plus------------------- */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110 animate-pulse"
            style={{ animationDuration: "2s" }}
          >
            <FaCode className="text-yellow-400 h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
            <h2 className="text-yellow-400">Speckit Plus</h2>
          </motion.div>
        </div>
        {/* ---------------------Hugging Face------------------- */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110 animate-pulse"
            style={{ animationDuration: "2s" }}
          >
            <SiHuggingface className="text-rose-400 h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
            <h2 className="text-rose-400">Hugging Face</h2>
          </motion.div>
        </div>
        {/* ---------------------Render------------------- */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110 animate-pulse"
            style={{ animationDuration: "2s" }}
          >
            <SiRender className="text-white h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
            <h2 className="text-white">Render</h2>
          </motion.div>
        </div>
        {/* ---------------------Neon DB------------------- */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110 animate-pulse"
            style={{ animationDuration: "2s" }}
          >
            <SiNexon className="text-sky-400 h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
            <h2 className="text-sky-400">Neon DB</h2>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Skills;
