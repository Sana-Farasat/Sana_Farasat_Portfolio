"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className=" max-w-[1500px] mx-auto flex justify-between items-center px-3 py-3">
      <Link href={"/"}>
        <div className="font-extrabold  text-cyan-700 dark:text-cyan-500 text-4xl m-3 shadow-2xl">
          SF
        </div>
      </Link>

      <div className="m-3 flex items-center gap-4">
        <nav className="flex items-center gap-4">
          <ul className="hidden sm:flex space-x-7">
            <li>
              {" "}
              <Link href="/">
                <button className="bg-cyan-700 dark:bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500 text-white text-xl px-2 md:text-2xl md:px-5 py-1 rounded-3xl font-semibold">
                  Home
                </button>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/about">
                <button className="bg-cyan-700 dark:bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500 text-white text-xl px-2 md:text-2xl md:px-5 py-1 rounded-3xl font-semibold">
                  About
                </button>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/contact-us">
                <button className="bg-cyan-700 dark:bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500 text-white text-xl px-2 md:text-2xl md:px-5  py-1 rounded-3xl font-semibold">
                  Contact
                </button>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <button className="bg-cyan-700 dark:bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500 text-white text-xl px-2 md:text-2xl md:px-5 py-1 rounded-3xl font-semibold">
                  Projects
                </button>
              </Link>
            </li>
            <li>
              <Link href="/skills">
                <button className="bg-cyan-700 dark:bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500 text-white text-xl px-2 md:text-2xl md:px-5  py-1 rounded-3xl font-semibold">
                  Skills
                </button>
              </Link>
            </li>
          </ul>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-cyan-700 dark:bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500 text-white transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </button>

          <Sheet>
            <SheetTrigger className="sm:hidden text-cyan-700 dark:text-white text-3xl">
              <GiHamburgerMenu />
            </SheetTrigger>
            <SheetContent className="bg-black/50">
              <br />
              <br />
              <ul className="flex flex-col space-y-5 ">
                <li>
                  {" "}
                  <Link href="/">
                    <button className="bg-cyan-700 dark:bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500 text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                      Home
                    </button>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/about">
                    <button className="bg-cyan-700 dark:bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500 text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                      About
                    </button>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/contact-us">
                    <button className="bg-cyan-700 dark:bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500 text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                      Contact
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <button className="bg-cyan-700 dark:bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500 text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                      Projects
                    </button>
                  </Link>
                </li>
                <Link href="/skills">
                  <button className="bg-cyan-700 dark:bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500 text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                    Skills
                  </button>
                </Link>
              </ul>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}

export default Header;
