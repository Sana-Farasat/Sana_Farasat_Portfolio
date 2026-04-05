import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function techStack() {
  return (
    <main>
      <section className="py-20 ">
        <div className="container px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-700 dark:text-cyan-500">
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Next.js",
                desc: "Server-side rendering, App Router, performance",
              },
              {
                title: "Tailwind CSS + Shadcn",
                desc: "Rapid, responsive, beautiful UIs",
              },
              { title: "TypeScript", desc: "Type-safe, scalable code" },
              { title: "Sanity CMS", desc: "Headless content management" },
              {
                title: "Python + FastAPI",
                desc: "Backend APIs, high performance",
              },
              {
                title: "Supabase / Agentic AI",
                desc: "Auth, DB, AI agents & workflows",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className=" border-spacing-1 border-cyan-500 shadow-xl bg-gradient-to-bl from-cyan-200 via-black  to-black  hover:shadow-cyan-500/30"
                data-aos="flip-left"
              >
                <CardHeader>
                  <CardTitle className="text-primary text-cyan-500 ">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-cyan-500">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
