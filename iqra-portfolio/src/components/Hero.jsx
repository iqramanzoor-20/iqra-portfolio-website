export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-black min-h-screen">
      {/* Left Text */}
      <div className="max-w-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Hi, I'm <span className="text-purple-500">Iqra Manzoor Ahmad</span>
        </h2>
        <h3 className="text-2xl mt-2 text-gray-300">
       Frontend Developer <span className="animate-pulse"></span>
        </h3>
        <p className="text-gray-400 mt-4">
          I build beautiful and responsive websites using modern technologies and creative design.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-md font-semibold text-white">
            View Work
          </button>
          <button className="border border-purple-600 hover:bg-purple-600 px-6 py-2 rounded-md font-semibold text-white">
            Contact Me
          </button>
        </div>
      </div>
{/* Right Image */}
<div className="mt-10 md:mt-0 float">
  <div className="p-1 rounded-full bg-gradient-to- from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30">
    <img
      src="/src/assets/iqra.jpg"
      alt="Iqra"
      className="w-64 h-64 rounded-full object-cover bg-black"
    />
  </div>
</div>
    </section>
  )
}