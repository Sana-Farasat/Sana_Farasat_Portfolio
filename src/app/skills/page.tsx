import dynamic from "next/dynamic";

// 👇 Dynamically import with SSR disabled
const Skills = dynamic(() => import("../../components/skills"), {
  ssr: true,
});

export default function SkillsPage() {
  return <Skills />;
}
