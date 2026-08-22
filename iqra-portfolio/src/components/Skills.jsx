import { Code2, Palette, FileJson, Atom, Wind, LayoutGrid } from 'lucide-react'

export default function Skills() {
  const skills = [
    {
      icon: <Code2 className="text-orange-500" size={32} />,
      title: "HTML5",
      desc: "Structuring web pages with semantic and clean HTML code.",
      tags: ["Semantic Tags", "Forms", "Accessibility"]
    },
    {
      icon: <Palette className="text-blue-500" size={32} />,
      title: "CSS3",
      desc: "Styling beautiful and responsive websites with modern CSS.",
      tags: ["Flexbox", "Grid", "Animations"]
    },
    {
      icon: <FileJson className="text-yellow-400" size={32} />,
      title: "JavaScript",
      desc: "Adding interactivity and logic to make websites dynamic.",
      tags: ["ES6", "DOM", "Events"]
    },
    {
      icon: <Atom className="text-cyan-400" size={32} />,
      title: "React",
      desc: "Building reusable UI components and single page applications.",
      tags: ["Hooks", "Components", "State"]
    },
    {
      icon: <Wind className="text-teal-400" size={32} />,
      title: "Tailwind CSS",
      desc: "Rapidly building modern designs with utility-first CSS.",
      tags: ["Responsive", "Utilities", "Dark Mode"]
    },
    {
      icon: <LayoutGrid className="text-purple-500" size={32} />,
      title: "Bootstrap",
      desc: "Creating responsive layouts quickly with Bootstrap components.",
      tags: ["Grid System", "Components", "Forms"]
    },
  ]

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">My <span className="text-purple-500">Skills</span></h2>
          <p className="text-gray-400 mt-3">Technologies I am learning and working with</p>
          <div className="w-16 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.title} className="group bg-zinc-900 p-6 rounded-xl border-zinc-800 hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300">
              <div className="mb-4 group-hover:scale-110 transition">{skill.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{skill.desc}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span key={tag} className="bg-black px-3 py-1 rounded-full text-xs text-gray-300 border-zinc-800">
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