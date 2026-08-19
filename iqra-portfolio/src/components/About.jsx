// function About() {
//   return (
//     <section id="about" className="py-24 bg-slate-900">
//       <div className="max-w-6xl mx-auto px-6">

//         <div className="text-center mb-12">
//           <p className="text-cyan-400 font-medium">
//             Get To Know Me
//           </p>

//           <h2 className="text-4xl md:text-5xl font-bold mt-2">
//             About Me
//           </h2>
//         </div>

//         <div className="max-w-4xl mx-auto text-center">
//           <p className="text-gray-300 text-lg leading-8">
//             I'm Iqra, a passionate Frontend Developer who enjoys
//             creating clean, modern and responsive websites.
//           </p>

//           <p className="text-gray-400 text-lg leading-8 mt-5">
//             I love working with HTML, CSS, JavaScript, React,
//             Tailwind CSS and Bootstrap to create beautiful web
//             experiences.
//           </p>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default About
import iqraImage from "../assets/iqra.jpg"

function About() {
  return (
    <section
      id="about"
      className="py-28 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Get To Know Me
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-6 bg-cyan-400/20 rounded-3xl blur-3xl"></div>

              <img
                src={iqraImage}
                alt="Iqra - Frontend Developer"
                className="relative w-72 h-80 md:w-96 md:h-430px object-cover rounded-3xl border-2 border-cyan-400/40 shadow-2xl"
              />

            </div>
          </div>

          {/* Right Content */}
          <div>

            <p className="text-cyan-400 text-lg font-medium mb-3">
              Who I Am
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-white">
              I'm Iqra, a
              <span className="text-cyan-400"> Frontend Developer</span>
            </h3>

            <p className="text-gray-300 text-lg leading-8 mt-6">
              I'm passionate about creating modern, responsive and
              user-friendly websites. I enjoy transforming ideas
              into beautiful and functional web experiences.
            </p>

            <p className="text-gray-400 text-lg leading-8 mt-5">
              I work with HTML, CSS, JavaScript, React, Tailwind CSS
              and Bootstrap. My goal is to write clean code and
              create websites that look great on every device.
            </p>

            {/* Info */}
            <div className="grid grid-cols-2 gap-5 mt-8">

              <div className="p-4 rounded-xl bg-slate-950 border border-white/10">
                <p className="text-gray-500 text-sm">
                  Name
                </p>
                <p className="text-white font-semibold mt-1">
                  Iqra
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-white/10">
                <p className="text-gray-500 text-sm">
                  Role
                </p>
                <p className="text-white font-semibold mt-1">
                  Frontend Developer
                </p>
              </div>

            </div>

            <a
              href="#contact"
              className="inline-block mt-8 px-7 py-3 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition"
            >
              Let's Work Together
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About