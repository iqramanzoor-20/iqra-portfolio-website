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
      description: "A simple and responsive landing page.",
      technologies: ["HTML", "CSS", "JS"],
    },

    {
      title: "Company Website",
      image: companyWebsite,
      description: "A simple website for a company.",
      technologies:["HTML", "CSS", "JS"],
    },

    {
      title: "My Portfolio",
      image: myPortfolio,
      description: "My personal website with my skills and work.",
      technologies:["HTML", "CSS", "JS"],
    },

    {
      title: "Smart Shop Website",
      image: smartShop,
      description: "A simple shopping website.",
      technologies: ["HTML", "CSS", "JS"],
    },

    {
      title: "Tic Tac Toe Game",
      image: ticTacToe,
      description: "A simple and fun Tic Tac Toe game.",
      technologies: ["HTML", "CSS", "JS"],
    },

    {
      title: "WaCube Tech",
      image: waCubeTech,
      description: "A modern website for a tech company.",
      technologies: ["React", "Tailwind", "JS"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-semibold">
            My Work
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            My Projects
          </h2>

          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-900 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Details */}
              <div className="p-4">

                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-2 text-xs leading-5 line-clamp-2">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mt-3">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 text-[10px]"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Button */}
                <a
                  href="#contact"
                  className="inline-block mt-3 text-cyan-400 font-semibold hover:text-cyan-300 transition text-xs"
                >
                  View →
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