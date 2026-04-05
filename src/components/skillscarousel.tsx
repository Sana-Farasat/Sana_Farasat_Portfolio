"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLayerGroup, FaBrain, FaCode } from "react-icons/fa";
import { SiOpenai, SiHuggingface, SiRender, SiNexon } from "react-icons/si";
import { TbPointerFilled } from "react-icons/tb";
import Slider from "react-slick";

function SkillsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 680,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const skills = [
    {
      name: "Headless CMS",
      icon: <FaLayerGroup className="text-cyan-400 h-20 w-20" />,
      color: "text-cyan-400",
    },
    {
      name: "OpenAI Agents",
      icon: <SiOpenai className="text-green-400 h-20 w-20" />,
      color: "text-green-400",
    },
    {
      name: "Claude Code",
      icon: <FaBrain className="text-orange-400 h-20 w-20" />,
      color: "text-orange-400",
    },
    {
      name: "Cursor AI",
      icon: <TbPointerFilled className="text-purple-400 h-20 w-20" />,
      color: "text-purple-400",
    },
    {
      name: "Speckit Plus",
      icon: <FaCode className="text-yellow-400 h-20 w-20" />,
      color: "text-yellow-400",
    },
    {
      name: "Hugging Face",
      icon: <SiHuggingface className="text-rose-400 h-20 w-20" />,
      color: "text-rose-400",
    },
    {
      name: "Render",
      icon: <SiRender className="text-white h-20 w-20" />,
      color: "text-white",
    },
    {
      name: "Neon DB",
      icon: <SiNexon className="text-sky-400 h-20 w-20" />,
      color: "text-sky-400",
    },
  ];

  return (
    <main className="py-10">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-500 text-center mb-10">
        My Skills
      </h2>

      <Slider
        {...settings}
        className="max-w-7xl mx-auto px-4 [&_.slick-slide]:mb-0 [&_.slick-track]:mb-0"
      >
        {skills.map((skill, index) => (
          <div key={index} className="px-4">
            <div className="rounded-3xl w-64 h-44 md:w-72 md:h-48 flex flex-col justify-center items-center text-xl text-white bg-gradient-to-t from-gray-100 via-gray-800 to-gray-950 shadow-lg hover:scale-105 transition-transform duration-300 mx-auto">
              {skill.icon}
              <h2 className={`${skill.color} mt-2`}>{skill.name}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </main>
  );
}

export default SkillsCarousel;
