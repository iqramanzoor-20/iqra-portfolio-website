import { Code, Palette, FileCode, Atom, Wind, LayoutGrid } from 'lucide-react'

export default function Skills() {
  const skills = [
    {
      icon: <Code className="w-10 h-10 text-orange-500" />,
      title: "HTML5",
      desc: "Structuring web pages with semantic and clean HTML code.",
      tags: ["Semantic Tags", "Forms", "Accessibility"]
    },
    {
      icon: <Palette className="w-10 h-10 text-blue-500" />,
      title: "CSS3",
      desc: "Styling beautiful and responsive websites with modern CSS.",
      tags: ["Flexbox", "Grid", "Animations"]
    },
    {
      icon: <FileCode className="w-10 h-10 text-yellow-400" />,
      title: "JavaScript",
      desc: "Adding interactivity and logic to make websites dynamic.",
      tags: ["ES6", "DOM", "Events"]
    },
    {
      icon: <Atom className="w-10 h-10 text-cyan-400" />,
      title: "React",
      desc: "Building reusable UI components and single page applications.",
      tags: ["Hooks", "Components", "State"]
    },
    {
      icon: <Wind className="w-10 h-10 text-teal-400" />,
      title: "Tailwind CSS",
      desc: "Rapidly building modern designs with utility-first CSS.",
      tags: ["Responsive", "Utilities", "Dark Mode"]
    },
    {
      icon: <LayoutGrid className="w-10 h-10 text-purple-500" />,
      title: "Bootstrap",
      desc: "Creating responsive layouts quickly with Bootstrap components.",
      tags: ["Grid System", "Components", "Forms"]
    },
  ]

  return (
    <section id="skills" className="px-6 md:px-12 py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">My <span className="text-purple-500">Skills</span></h2>
          <p className="text-gray-400">Technologies I am learning and working with</p>
        </div>

        {/* 3x2 Grid Cards - Screenshot jese */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-zinc-900 p-6 rounded-xl border-zinc-800 hover:border-purple-500 hover:scale-105 transition duration-300 group"
            >
              <div className="mb-4 group-hover:scale-110 transition">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{skill.desc}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span key={tag} className="bg-black px-3 py-1 rounded-full text-xs border border-zinc-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}