import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <section id="contact" className="scroll-mt-20">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-cyan-700 dark:text-cyan-500">
            Let&apos;s Build Something Amazing Together
          </h2>

          <p className="text-xl md:text-2xl text-cyan-600 dark:text-cyan-600/90 font-medium max-w-3xl mx-auto">
            Open to full-time remote roles, freelance projects, or exciting
            collaborations – especially with US-based teams.
          </p>

          {/* Big Call-to-Action Button */}
          <div className="pt-6 pb-10">
            <Button
              asChild
              size="lg"
              className="text-lg md:text-xl font-semibold px-10 py-7 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-600/50 transition-all duration-300 rounded-full"
            >
              {/* <Link href="mailto:sanafarasat786@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Sana%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss..."> */}
              <Link href="mailto:sanafarasat786@gmail.com">
                <IoMail className="mr-3 text-2xl" /> Hire Me / Let&apos;s Talk
              </Link>
            </Button>
          </div>

          {/* Nice one-liner contact links – very attractive & copy-paste friendly */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-cyan-600 dark:text-gray-300 mb-6 font-medium">
              Or reach out directly:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-col-3 gap-5 md:gap-8 text-left sm:text-center">
              {/* Email */}
              <div className="text-center bg-cyan-500 dark:bg-gradient-to-br dark:from-slate-800/40 dark:to-slate-900/40 border border-cyan-500/20 rounded-xl p-5 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-cyan-500/20 hover:shadow-xl">
                <div className="flex items-center justify-center sm:justify-start gap-3 text-white mb-2">
                  <IoMail className="text-2xl" />
                  <span className="font-semibold">Email</span>
                </div>
                <Link
                  href="mailto:sanafarasat786@gmail.com"
                  className="text-gray-200 text-sm hover:text-cyan-300 transition-colors break-all md:break-normal"
                >
                  sanafarasat786@gmail.com
                </Link>
              </div>

              {/* GitHub */}
              <div className="text-center bg-cyan-500 dark:bg-gradient-to-br dark:from-slate-800/40 dark:to-slate-900/40 border border-cyan-500/20 rounded-xl p-5 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-cyan-500/20 hover:shadow-xl">
                <div className="flex items-center justify-center sm:justify-start gap-3 text-white mb-2">
                  <FaGithub className="text-2xl" />
                  <span className="font-semibold ">GitHub</span>
                </div>
                <Link
                  href="https://github.com/Sana-Farasat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-200 hover:text-cyan-300 transition-colors"
                >
                  github.com/Sana-Farasat
                </Link>
              </div>

              {/* LinkedIn */}
              <div className="text-center bg-cyan-500 dark:bg-gradient-to-br dark:from-slate-800/40 dark:to-slate-900/40 border border-cyan-500/20 rounded-xl p-5 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-cyan-500/20 hover:shadow-xl">
                <div className="flex items-center justify-center sm:justify-start gap-3 text-white mb-2">
                  <FaLinkedin className="text-2xl" />
                  <span className="font-semibold">LinkedIn</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/sana-farasat-b438a22b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-sm text-gray-200 hover:text-cyan-300 transition-colors"
                >
                  linkedin.com/in/sana-farasat
                </a>
              </div>

              {/* Twitter */}
              <div className="text-center bg-cyan-500 dark:bg-gradient-to-br dark:from-slate-800/40 dark:to-slate-900/40 border border-cyan-500/20 rounded-xl p-5 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-cyan-500/20 hover:shadow-xl">
                <div className="flex items-center justify-center sm:justify-start gap-3 text-white mb-2">
                  <FaTwitter className="text-2xl" />
                  <span className="font-semibold">Twitter</span>
                </div>
                <Link
                  href="https://x.com/sana717_sf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-200 hover:text-cyan-300 transition-colors"
                >
                  Sana Farasat
                </Link>
              </div>
            </div>
          </div>

          <p className="pt-12 text-lg text-cyan-600 dark:text-gray-400 italic">
            Looking forward to hearing from you! 🚀
          </p>
        </div>
      </section>
    </main>
  );
}
