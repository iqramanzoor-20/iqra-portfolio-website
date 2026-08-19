import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <main>
        <Hero />
        <About />
      </main>

    </div>
  )
}

export default App