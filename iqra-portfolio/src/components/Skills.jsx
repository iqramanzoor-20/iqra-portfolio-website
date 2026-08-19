// // function Skills() {
// //   const skills = [
// //     {
// //       name: "HTML",
// //       level: "Advanced",
// //       description: "Semantic and structured web pages",
// //     },
// //     {
// //       name: "CSS",
// //       level: "Advanced",
// //       description: "Responsive and modern styling",
// //     },
// //     {
// //       name: "JavaScript",
// //       level: "Intermediate",
// //       description: "Interactive web functionality",
// //     },
// //     {
// //       name: "React",
// //       level: "Intermediate",
// //       description: "Modern component-based UI",
// //     },
// //     {
// //       name: "Tailwind CSS",
// //       level: "Intermediate",
// //       description: "Fast and responsive UI design",
// //     },
// //     {
// //       name: "Bootstrap",
// //       level: "Intermediate",
// //       description: "Responsive layouts and components",
// //     },
// //     {
// //       name: "GitHub",
// //       level: "Intermediate",
// //       description: "Version control and projects",
// //     },
// //   ]

// //   return (
// //     <section id="skills" className="py-24 bg-slate-950">
// //       <div className="max-w-6xl mx-auto px-6">

// //         <div className="text-center mb-14">
// //           <p className="text-cyan-400 font-medium">
// //             My Expertise
// //           </p>

// //           <h2 className="text-4xl md:text-5xl font-bold mt-2">
// //             Skills
// //           </h2>

// //           <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
// //             Technologies and tools I use to build modern,
// //             responsive and user-friendly websites.
// //           </p>
// //         </div>

// //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

// //           {skills.map((skill) => (
// //             <div
// //               key={skill.name}
// //               className="group p-6 rounded-2xl bg-slate-900 border border-white/10 hover:border-cyan-400/50 hover:-translate-y-2 transition duration-300"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <h3 className="text-xl font-bold">
// //                   {skill.name}
// //                 </h3>

// //                 <span className="text-sm text-cyan-400">
// //                   {skill.level}
// //                 </span>
// //               </div>

// //               <p className="text-gray-400 mt-3">
// //                 {skill.description}
// //               </p>

// //               <div className="w-full h-1.5 bg-slate-700 rounded-full mt-6 overflow-hidden">
// //                 <div className="w-4/5 h-full bg-cyan-400 rounded-full"></div>
// //               </div>
// //             </div>
// //           ))}

// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default Skills


// function Skills() {
//   const skills = [
//     { name: "HTML", level: 90 },
//     { name: "CSS", level: 85 },
//     { name: "JavaScript", level: 75 },
//     { name: "React", level: 75 },
//     { name: "Tailwind CSS", level: 85 },
//     { name: "Bootstrap", level: 80 },
//     { name: "GitHub", level: 70 },
//   ]

//   return (
//     <section
//       id="skills"
//       className="py-24 bg-slate-950"
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <p className="text-cyan-400 font-medium">
//             My Skills
//           </p>

//           <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
//             Technologies I Work With
//           </h2>

//           <p className="text-gray-400 max-w-2xl mx-auto mt-5">
//             I use modern frontend technologies to build
//             responsive, fast and user-friendly websites.
//           </p>
//         </div>

//         {/* Skills */}
//         <div className="max-w-4xl mx-auto space-y-8">

//           {skills.map((skill) => (
//             <div key={skill.name}>

//               <div className="flex justify-between mb-3">
//                 <span className="text-white font-medium">
//                   {skill.name}
//                 </span>

//                 <span className="text-cyan-400">
//                   {skill.level}%
//                 </span>
//               </div>

//               <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-gradient-to- from-cyan-400 to-blue-500 rounded-full transition-all duration-1000"
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   )
// }

// export default Skills



function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "🌐",
      description: "Semantic and structured web development",
    },
    {
      name: "CSS",
      icon: "🎨",
      description: "Responsive and modern styling",
    },
    {
      name: "JavaScript",
      icon: "⚡",
      description: "Interactive and dynamic websites",
    },
    {
      name: "React",
      icon: "⚛️",
      description: "Modern component-based interfaces",
    },
    {
      name: "Tailwind CSS",
      icon: "💨",
      description: "Fast and responsive UI design",
    },
    {
      name: "Bootstrap",
      icon: "🅱️",
      description: "Responsive layouts and components",
    },
    {
      name: "GitHub",
      icon: "🐙",
      description: "Version control and collaboration",
    },
  ]

  return (
    <section
      id="skills"
      className="py-28 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            My Technical Skills
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Technologies I use to create modern, responsive and
            professional web experiences.
          </p>

        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-7 rounded-2xl bg-slate-950 border border-white/10 hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-400/10 text-2xl group-hover:bg-cyan-400 group-hover:scale-110 transition-all duration-300">
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold text-white mt-6">
                {skill.name}
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                {skill.description}
              </p>

              <div className="mt-6 w-10 h-1 bg-cyan-400 rounded-full group-hover:w-20 transition-all duration-300"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills