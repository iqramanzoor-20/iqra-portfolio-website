export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Company Name", // yahan apni company ka naam likho
      duration: "Jul 2025 - Present",
      description: "Working on responsive web applications using React, Tailwind CSS and JavaScript. Implementing UI components and optimizing performance for better user experience.",
    },
    {
      role: "Web Development Student",
      company: "BSCS - Your University Name",
      duration: "2023 - Present",
      description: "Learning modern frontend technologies including React, Tailwind CSS and JavaScript. Built 6+ projects including Portfolio, Landing Pages and Interactive Games.",
    }
  ]

  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-semibold">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Experience</h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-cyan-400/20 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-8">
              {/* Dot */}
              <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-2.5 mt-1.5"></div>
              
              {/* Card */}
              <div className="bg-slate-900 p-6 rounded-xl border-white/10 hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="bg-cyan-400/10 text-cyan-400 text-xs px-3 py-1 rounded-full mt-2 sm:mt-0">{exp.duration}</span>
                </div>
                <p className="text-cyan-400 text-sm mb-3">{exp.company}</p>
                <p className="text-gray-400 text-sm leading-6">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}