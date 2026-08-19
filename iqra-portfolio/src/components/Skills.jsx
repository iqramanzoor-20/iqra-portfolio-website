function Skills() {
  const skills = [
    {
      name: "HTML",
      level: "Advanced",
      description: "Semantic and structured web pages",
    },
    {
      name: "CSS",
      level: "Advanced",
      description: "Responsive and modern styling",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      description: "Interactive web functionality",
    },
    {
      name: "React",
      level: "Intermediate",
      description: "Modern component-based UI",
    },
    {
      name: "Tailwind CSS",
      level: "Intermediate",
      description: "Fast and responsive UI design",
    },
    {
      name: "Bootstrap",
      level: "Intermediate",
      description: "Responsive layouts and components",
    },
    {
      name: "GitHub",
      level: "Intermediate",
      description: "Version control and projects",
    },
  ]

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-cyan-400 font-medium">
            My Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Skills
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build modern,
            responsive and user-friendly websites.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-6 rounded-2xl bg-slate-900 border border-white/10 hover:border-cyan-400/50 hover:-translate-y-2 transition duration-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  {skill.name}
                </h3>

                <span className="text-sm text-cyan-400">
                  {skill.level}
                </span>
              </div>

              <p className="text-gray-400 mt-3">
                {skill.description}
              </p>

              <div className="w-full h-1.5 bg-slate-700 rounded-full mt-6 overflow-hidden">
                <div className="w-4/5 h-full bg-cyan-400 rounded-full"></div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills