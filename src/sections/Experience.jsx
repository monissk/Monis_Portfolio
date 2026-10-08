const experiences = [
  {
    period: "Feb 2026 — May 2026",
    role: "Agentic AI Intern",
    company: "Innomatics Research Labs",
    description:
      "Worked on Generative AI and Agentic AI projects using Python, FastAPI, LangChain, LangGraph, and LLM technologies. Built RAG-based applications, implemented prompt engineering workflows, developed REST APIs, and explored AI-driven solutions for real-world use cases.",
    technologies: [
      "Python",
      "FastAPI",
      "LLMs",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
    ],
    current: false,
  },

  {
    period: "Aug 2026 — Dec 2026",
    role: "Data Analytics Intern",
    company: "Imarticus Learning",
    description:
      "Gained practical, industry-oriented experience in Data Analytics and Business Intelligence, with exposure to Excel, SQL, Power BI, data cleaning, analysis, visualization, and real-world business use cases.",
    technologies: [
      "Excel",
      "SQL",
      "Power BI",
      "Data Analytics",
      "Data Visualization",
    ],
    current: false,
  },

  {
    period: "Sep 2026 — Nov 2026",
    role: "Industry Readiness Program",
    company: "Siemens Digital Industries Software",
    description:
      "Selected for the Siemens Software Industry Readiness Program, a 2-month virtual learning initiative focused on practical, industry-relevant software skills. Worked on RapidMiner and Mendix through structured learning, hands-on exercises, and project-based activities.",
    technologies: [
      "RapidMiner",
      "Mendix",
      "Data Analytics",
      "Low-Code Development",
    ],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/4
          w-96
          h-96
          bg-primary/5
          rounded-full
          blur-3xl
          -translate-y-1/2
        "
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-20 relative z-10">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="text-center mx-auto max-w-3xl mb-16">

          <span
            className="
              text-secondary-foreground
              text-sm
              font-medium
              tracking-wider
              uppercase
              animate-fade-in
            "
          >
            Professional Journey
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
              mb-6
              animate-fade-in
              animation-delay-100
              text-secondary-foreground
            "
          >
            Building, learning & growing.
          </h2>

          <p
            className="
              text-muted-foreground
              animate-fade-in
              animation-delay-200
            "
          >
            My journey as a developer has been driven by continuous
            learning, hands-on projects, internships, and real-world
            experience. Each opportunity has helped me strengthen my
            technical skills and grow as a software developer.
          </p>

        </div>

        {/* =========================
            TIMELINE
        ========================== */}
        <div className="relative">

          {/* CENTER / LEFT TIMELINE LINE */}
          <div
            className="
              timeline-glow
              absolute
              left-0
              md:left-1/2
              top-0
              bottom-0
              w-[2px]
              -translate-x-1/2
              bg-gradient-to-b
              from-primary/70
              via-primary/30
              to-transparent
              shadow-[0_0_25px_rgba(32,178,166,0.8)]
            "
          />

          {/* EXPERIENCE ITEMS */}
          <div className="space-y-12 md:space-y-20">

            {experiences.map((exp, idx) => (

              <div
                key={idx}
                className="
                  relative
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-8
                  animate-fade-in
                "
                style={{
                  animationDelay: `${(idx + 1) * 150}ms`,
                }}
              >

                {/* =========================
                    TIMELINE DOT
                ========================== */}
                <div
                  className="
                    absolute
                    left-0
                    md:left-1/2
                    top-0
                    w-3
                    h-3
                    bg-primary
                    rounded-full
                    -translate-x-1/2
                    ring-4
                    ring-background
                    z-20
                  "
                >

                  {exp.current && (
                    <span
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-primary
                        animate-ping
                        opacity-75
                      "
                    />
                  )}

                </div>

                {/* =========================
                    EXPERIENCE CARD
                ========================== */}
                <div
                  className={`
                    pl-8
                    md:pl-0

                    ${
                      idx % 2 === 0
                        ? "md:col-start-1 md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }
                  `}
                >

                  <div
                    className="
                      glass
                      p-6
                      rounded-2xl
                      border
                      border-primary/30
                      hover:border-primary/50
                      transition-all
                      duration-500
                      hover:-translate-y-1
                    "
                  >

                    {/* DATE */}
                    <span
                      className="
                        text-sm
                        text-primary
                        font-medium
                      "
                    >
                      {exp.period}
                    </span>

                    {/* ROLE */}
                    <h3
                      className="
                        text-xl
                        md:text-2xl
                        font-semibold
                        mt-2
                      "
                    >
                      {exp.role}
                    </h3>

                    {/* COMPANY */}
                    <p
                      className="
                        text-muted-foreground
                        mt-1
                      "
                    >
                      {exp.company}
                    </p>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        text-sm
                        text-muted-foreground
                        mt-4
                        leading-relaxed
                      "
                    >
                      {exp.description}
                    </p>

                    {/* TECHNOLOGIES */}
                    <div
                      className={`
                        flex
                        flex-wrap
                        gap-2
                        mt-4

                        ${
                          idx % 2 === 0
                            ? "md:justify-end"
                            : "md:justify-start"
                        }
                      `}
                    >

                      {exp.technologies.map((tech, techIdx) => (

                        <span
                          key={techIdx}
                          className="
                            px-3
                            py-1
                            bg-surface
                            text-xs
                            rounded-full
                            text-muted-foreground
                            border
                            border-border/30
                          "
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};