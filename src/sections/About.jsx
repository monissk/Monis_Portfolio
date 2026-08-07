import { Code2, Puzzle, BrainCircuit, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building responsive, scalable, and database-driven web applications using React, Django, FastAPI, and modern web technologies.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Developing AI-powered applications with Machine Learning, LangChain, LangGraph, and LLMs to solve real-world problems.",
  },
  {
    icon: Puzzle,
    title: "Problem Solving",
    description: "Strengthening analytical thinking through Data Structures, Algorithms, and efficient software design to build reliable applications.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Continuously exploring emerging technologies, improving development skills, and adapting to modern software engineering practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a Full Stack Developer and final-year Computer Science and Business Systems student passionate about building scalable web applications and AI-powered solutions. My interests span Full Stack Development, Machine Learning, and Generative AI, where I enjoy turning ideas into practical, real-world applications.
              </p>
              <p>
                I work primarily with React, Django, FastAPI, Python, and Tailwind CSS to develop responsive, user-friendly, and database-driven applications. I also have experience building AI-powered projects using LangChain, LangGraph, ChromaDB, and modern LLM technologies, with a focus on creating efficient and intelligent software solutions.
              </p>
              
            </div>

            <div className="glass rounded-2xl p-4 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to build innovative, scalable, and user-focused applications that solve real-world problems while continuously learning and growing as a software engineer."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
