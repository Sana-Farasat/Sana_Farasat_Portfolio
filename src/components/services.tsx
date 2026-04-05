import { Card, CardContent } from "./ui/card";

export default function Services() {
  return (
    <main>
      <section className="">
        <div className="container px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-700 dark:text-cyan-500">
            What I Can Build For You
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Figma to Pixel-Perfect Code",
              "Fully Responsive Websites & Apps",
              "Next.js Full-Stack Applications",
              "Modern UI with Smooth Animations",
              "Sanity CMS + API Integrations",
              "AI-Powered Features & Chatbots",
              "Backend with FastAPI/Supabase",
              "Dockerized Deployments",
              "Landing Pages & Portfolios",
            ].map((service) => (
              <Card
                key={service}
                className=" border-spacing-1 border-cyan-500 shadow-xl bg-gradient-to-bl from-cyan-200 via-black  to-black hover:shadow-cyan-500/30"
                data-aos="fade-left"
                data-aos-offset="200"
              >
                <CardContent className="pt-6">
                  <p className="text-lg font-medium text-center text-cyan-500">
                    {service}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
