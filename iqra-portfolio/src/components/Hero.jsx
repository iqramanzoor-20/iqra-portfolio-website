export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .float-animate {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-black min-h-screen">

        {/* Text */}
        <div className="max-w-lg">

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Hi, I'm <span className="text-purple-500">Iqra Manzoor Ahmad</span>
          </h2>

          <h3 className="text-2xl mt-2 text-gray-300">
            Frontend Developer <span className="animate-pulse"></span>
          </h3>

          <p className="text-gray-400 mt-4">
            I create simple and beautiful websites using modern web technologies.
          </p>

          <div className="flex gap-4 mt-6">

            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-md font-semibold text-white"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="border border-purple-600 hover:bg-purple-600 px-6 py-2 rounded-md font-semibold text-white"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0 float-animate">
          <div className="p-1 rounded-full bg-gradient-to from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30">

            <img
              src="/src/assets/iqra.jpg"
              alt="Iqra"
              className="w-64 h-64 rounded-full object-cover bg-black"
            />

          </div>
        </div>

      </section>
    </>
  )
}