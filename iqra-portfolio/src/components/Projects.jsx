import landingPage from "../assets/landingpage.png"
import companyWebsite from "../assets/companywebsite.png"
import myPortfolio from "../assets/myportfolio.png"
import smartShop from "../assets/smartshopwebsite.png"
import ticTacToe from "../assets/Tictactoegame.png"
import waCubeTech from "../assets/WaCubeTech.png"

function Projects() {
  const projects = [
    {
      title: "Landing Page",
      image: landingPage,
      description:
        "A modern responsive landing page designed with a clean and professional user interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Company Website",
      image: companyWebsite,
      description:
        "A professional company website with responsive sections and modern web design.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "My Portfolio",
      image: myPortfolio,
      description:
        "A personal portfolio website showcasing my skills, projects and frontend development work.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Smart Shop Website",
      image: smartShop,
      description:
        "A modern shopping website interface with responsive design and user-friendly layout.",
      technologies: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Tic Tac Toe Game",
      image: ticTacToe,
      description:
        "An interactive Tic Tac Toe game built with JavaScript and a simple responsive interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "WaCube Tech",
      image: waCubeTech,
      description:
        "A modern technology website designed with a professional responsive layout.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
    },
  ]

  return (
    <section
      id="projects"
      className="py-28 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            My Projects
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Here are some of the projects I have created using
            modern frontend technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href="#contact"
                  className="inline-block mt-6 text-cyan-400 font-semibold hover:text-cyan-300 transition"
                >
                  View Project →
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects