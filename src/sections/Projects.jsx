import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "QuickShop an E-Commerce Platform",
    description:
      "QuickShop is a full-stack e-commerce web application that enables users to browse products, manage a dynamic shopping cart, place orders, and securely authenticate their accounts. Built with Django and JavaScript, the application focuses on responsive design, seamless user experience, and efficient database management.",
    image: "/projects/project1.png",
    tags: ["Django", "Python", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    link: "https://quickshop-u304.onrender.com/",
    github: "https://github.com/monissk/QuickShop",
  },
  {
    title: "RAG Customer Support Assistant",
    description:
      "An AI-powered Customer Support Assistant built using Retrieval-Augmented Generation (RAG) to provide accurate, context-aware responses from a company knowledge base. The assistant retrieves relevant information from documents before generating responses, reducing hallucinations and improving answer reliability. It also supports conversation memory and human escalation for complex queries.",
    image: "/projects/project2.png",
    tags: ["Python", "FastAPI", "LangChain", "LangGraph", "ChromaDB", "OpenAI API", "Hugging", "Embeddings", "REST API"],
    link: "https://drive.google.com/file/d/1SA-ogq79JxU1nBCL2nTvwOoD3E9HLNtY/view?usp=sharing",
    github: "https://github.com/monissk/Rag-Customer-Support",
  },
  {
    title: "Student Performance Prediction",
    description:
      "A Machine Learning project that predicts student academic performance based on demographic, academic, and behavioral factors. The model analyzes historical student data to estimate future performance, helping educators identify at-risk students and support data-driven academic decision-making.",
    image: "/projects/project3.png",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    link: "#",
    github: "https://github.com/monissk/Academic-Performance-Predictor",
  },
  {
    title: "X-Clone",
    description:
      "A modern social media web application inspired by X (formerly Twitter), featuring a responsive user interface, secure authentication, real-time post interactions, and user profile management. The project demonstrates modern frontend development practices with an intuitive and engaging user experience.",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/monissk/X-Clone",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              Showcase My Skills.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of Full Stack, AI, and Machine Learning projects that demonstrate my ability to design, develop, and deploy real-world applications using modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/monissk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
