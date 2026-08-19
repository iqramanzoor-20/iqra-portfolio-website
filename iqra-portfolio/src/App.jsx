import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-5xl font-bold">
            Iqra Portfolio
          </h1>
        </section>
      </main>
    </div>
  )
}

export default App