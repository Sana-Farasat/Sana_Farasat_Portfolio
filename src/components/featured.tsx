import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

export default function Projects() {
  return (
    <main>
      <section id="projects" className="py-20">
        <div className="container px-4">
          {/* Section Heading */}
          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-700  dark:text-cyan-500"
          >
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "IT Blog Platform",
                image: "/it-blog.png",
                desc: "Full-featured blog with Sanity CMS, search, pagination, save/copy/share/download blogs. Built with Next.js & Tailwind.",
                link: "https://it-blog-jet.vercel.app/",
                github: "https://github.com/Sana-Farasat/IT-Blog",
              },
              {
                title: "Market Builder Ecommerce",
                image: "/hecto-site.png",
                desc: "Figma-to-code ecommerce with Sanity API, cart, wishlist, Stripe payments, filtering & checkout.",
                link: "https://market-builder-website.vercel.app/",
                github: "https://github.com/Sana-Farasat/Market-Builder-Website",
              },
              {
                title: "SDK Bot – AI Agent Builder",
                image: "/sdk-bot.png",
                desc: "AI-powered chatbot trained on SDK docs using agentic workflows. Next.js frontend.",
                link: "https://sdk-bot.vercel.app/",
                github: "https://github.com/Sana-Farasat/SDK-Bot-Frontend",
              },
              {
                title: "AI-Native Book: Physical AI & Robotics",
                image: "/ai-native-book.png",
                desc: "Interactive AI-native book with RAG chatbot, quizzes, summaries & PDF export.",
                link: "https://ai-native-book-omega.vercel.app/",
                github: "https://github.com/Sana-Farasat/AI-Native-Book",
              },
              {
                title: "Crypto Investment Platform",
                image: "/crypto-site.png",
                desc: "Crypto platform with Framer Motion animations, calculators, plans & testimonials.",
                link: "https://crypto-website-flax.vercel.app/",
                github: "https://github.com/Sana-Farasat/Crypto-Website",
              },
            ].map((proj, index) => (
              <Card
                key={proj.title}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="shadow-lg  shadow-cyan-500 overflow-hidden border border-cyan-500/30 
                  bg-cyan-700 dark:bg-black/40 backdrop-blur
                  hover:scale-[1.03] transition-transform duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white dark:text-cyan-400 mb-2">
                    {proj.title}
                  </h3>

                  <p className="text-sm text-cyan-100 mb-4 leading-relaxed">
                    {proj.desc}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      className="border-cyan-400 text-cyan-400  bg-black hover:bg-cyan-50"
                    >
                      <Link
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Link>
                    </Button>

                    {/* GitHub Icon */}
                    <Link
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white dark:text-cyan-400 hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55v-1.93c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.21 1.79 1.21 1.04 1.78 2.72 1.27 3.39.97.1-.76.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.5.12-3.12 0 0 .97-.31 3.18 1.17a10.96 10.96 0 0 1 5.8 0c2.2-1.48 3.17-1.17 3.17-1.17.64 1.62.24 2.82.12 3.12.75.8 1.2 1.82 1.2 3.07 0 4.41-2.68 5.38-5.24 5.67.41.36.78 1.07.78 2.15v3.19c0 .3.2.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z" />
                      </svg>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
