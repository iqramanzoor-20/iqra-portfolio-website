export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-zinc-900 border-b border-zinc-800">
      <h1 className="text-xl font-bold flex items-center gap-2 text-white">
        <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
        Iqra<span className="text-purple-500">Ahmad</span>
      </h1>
      <ul className="hidden md:flex gap-8 text-gray-300">
        <li className="hover:text-purple-500 cursor-pointer">Home</li>
       <li><a href="#about" className="hover:text-purple-500 cursor-pointer">About</a></li>
        <li><a href="#skills" className="hover:text-purple-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-500 transition">Projects</a></li>
     <li><a href="#experience" className="hover:text-purple-500 transition">Experience</a></li>
         <li><a href="#contact" className="hover:text-purple-500 transition">Contact</a></li>
        
      </ul>
    </nav>
  )
}