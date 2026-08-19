import iqraImage from "../assets/iqra.jpg"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <p className="text-cyan-400 text-lg font-medium mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Iqra
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mt-3">
              Frontend Developer
            </h2>

            <p className="text-gray-400 text-lg leading-8 mt-6 max-w-xl">
              I create modern, responsive and user-friendly websites
              using React, JavaScript, Tailwind CSS and modern web
              technologies.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="px-7 py-3 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-full border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-950 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">

              {/* Glow behind image */}
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-3xl opacity-20"></div>

              {/* Iqra's Photo */}
              <img
                src={iqraImage}
                alt="Iqra - Frontend Developer"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-400/50 shadow-2xl"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero