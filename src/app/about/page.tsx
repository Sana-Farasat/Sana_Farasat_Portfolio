"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <main className="max-w-screen-2xl mx-auto">
      <section id="about" className=" py-4 px-6 sm:px-10 md:px-20">
        <div className="max-w-5xl mx-auto text-cyan-700 dark:text-cyan-500">
          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center sm:text-left"
          >
            About Me
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 text-cyan-700 dark:text-cyan-500"
          >
            I am a{" "}
            <span className="font-semibold text-cyan-700 dark:text-cyan-500">
              Frontend-focused Developer
            </span>{" "}
            with hands-on experience building and deploying production-ready web
            applications using
            <span className="font-semibold">
              {" "}
              React, Next.js, Tailwind CSS, and TypeScript
            </span>
            . I am actively expanding into full-stack development with
            <span className="font-semibold"> Python & FastAPI</span>.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 text-cyan-700 dark:text-cyan-500"
          >
            I am comfortable with the complete development lifecycle — from
            clean UI/UX implementation and version control using
            <span className="font-extrabold"> GitHub</span> to real-world
            deployments. I have experience deploying frontends on
            <span className="font-extrabold"> Vercel</span> and backends on
            <span className="font-extrabold">
              {" "}
              Hugging Face, Render, and Railway
            </span>
            .
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 text-cyan-700 dark:text-cyan-500"
          >
            I work with modern tools including
            <span className="font-extrabold">
              {" "}
              Supabase, Sanity CMS, Docker, and Agentic AI systems
            </span>
            , following spec-driven development workflows and AI integrations
            such as SpekitPlus and Claude.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 text-cyan-700 dark:text-cyan-500"
          >
            I have participated in
            <span className="font-extrabold text-cyan-700 dark:text-cyan-500">
              {" "}
              multiple UI/UX and technical hackathons
            </span>
            , strengthening my ability to rapidly prototype, collaborate
            effectively in teams, and deliver innovative solutions under tight
            deadlines.
          </p>

          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="border-l-4 border-cyan-500 pl-4"
          >
            <p className="text-lg sm:text-xl font-semibold text-cyan-700 dark:text-cyan-500">
              🎯 Goal
            </p>
            <p className="text-base sm:text-lg mt-2 text-cyan-700 dark:text-cyan-500">
              To build scalable, high-impact applications that solve real-world
              problems and contribute to fast-growing teams — open to
              <span className="font-extrabold text-cyan-700 dark:text-cyan-500">
                {" "}
                remote US & international roles
              </span>{" "}
              as well as freelance and contract opportunities.
            </p>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
    </main>
  );
}
