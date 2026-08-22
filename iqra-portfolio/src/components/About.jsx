export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Image */}
        <div className="flex justify-center">
          <div className="p-1 rounded-2xl bg-gradient-to from-purple-500 to-pink-500"> {/* 👈 from add kiya */}
            <img
              src="/src/assets/iqra.jpg" // 👈 agar error de to src/assets/iqra.jpg karo
              alt="Iqra"
              className="w-350px h-450px object-cover rounded-2xl bg-zinc-900" // 👈 w-350px galat tha
            />
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-4xl font-bold mb-3">
            About <span className="text-purple-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-purple-500 mb-6 rounded-full"></div> {/* 👈 underline add */}

          <p className="text-gray-400 mb-4 leading-relaxed">
            I'm Iqra, an aspiring <span className="text-purple-400 font-semibold">Frontend Developer</span>.
            I'm currently learning Web Development and building projects using modern technologies.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            My goal is to become a professional Frontend Developer and work with companies
            to build beautiful, responsive, and user-friendly websites.
          </p>

          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3 text-purple-400">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React', 'Git', 'GitHub'].map((skill) => (
                <span key={skill} className="bg-zinc-900 px-3 py-1 rounded-full text-sm border border-zinc-800 hover:border-purple-500 hover:text-purple-400 transition"> {/* 👈 border add */}
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2 text-purple-400">Projects</h3>
            <p className="text-gray-400 text-sm">
              So far, I have built 3-4 portfolio websites and 1 Todo App 🚀
            </p>
          </div>

          {/* Hobbies */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2 text-purple-400">Hobbies</h3>
            <p className="text-gray-400 text-sm">
              Book reading, exploring UI designs, and learning to code from YouTube 📚
            </p>
          </div>

          {/* 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-purple-500 hover:-translate-y-1 transition"> {/* 👈 border add */}
              <h3 className="font-bold text-lg mb-1">Fast Learner</h3>
              <p className="text-sm text-gray-400">Always eager to learn new technologies</p>
            </div>
            <div className="bg-zinc-900 p-5 rounded-xl border-zinc-800 hover:border-purple-500 hover:-translate-y-1 transition">
              <h3 className="font-bold text-lg mb-1">Design Focused</h3>
              <p className="text-sm text-gray-400">Passionate about clean and modern UI</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}