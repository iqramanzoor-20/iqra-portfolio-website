function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-medium">
            My Recent Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here is one of my projects built with modern
            frontend technologies.
          </p>
        </div>

        {/* Project Card */}
        <div className="max-w-4xl mx-auto">
          <div className="group bg-slate-950 rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition duration-300">

            {/* Project Preview */}
            <div className="h-64 md:h-80 bg-gradient-to from-cyan-400/20 via-slate-900 to-purple-500/20 flex items-center justify-center">
              <div className="text-center">
                <p className="text-cyan-400 text-sm uppercase tracking-widest">
                  Featured Project
                </p>

                <h3 className="text-3xl md:text-4xl font-bold mt-3">
                  Iqra Portfolio
                </h3>

                <p className="text-gray-400 mt-2">
                  Personal Portfolio Website
                </p>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8">

              <h3 className="text-2xl font-bold">
                Iqra Portfolio Website
              </h3>

              <p className="text-gray-400 leading-7 mt-4">
                A modern and responsive personal portfolio website
                designed to showcase my skills, projects and
                frontend development experience.
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-400 text-sm">
                  React
                </span>

                <span className="px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-400 text-sm">
                  Tailwind CSS
                </span>

                <span className="px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-400 text-sm">
                  JavaScript
                </span>

                <span className="px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-400 text-sm">
                  HTML
                </span>

                <span className="px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-400 text-sm">
                  CSS
                </span>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="#"
                  className="px-6 py-3 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  GitHub
                </a>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects