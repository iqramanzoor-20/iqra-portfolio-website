import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message sent! I'll get back to you soon.")
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="bg-slate-950 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-semibold">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Contact Me</h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 2 Column Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          
          {/* Left: Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="text" required placeholder="Your Name"
              value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-slate-900 border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-400"
            />
            <input type="email" required placeholder="Email Address"
              value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-slate-900 border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-400"
            />
            <textarea rows="5" required placeholder="Your Message"
              value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-slate-900 border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-400 resize-none"
            ></textarea>
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition">
              Send
            </button>
          </form>

          {/* Right: Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-semibold">Location</h4>
              <p className="text-gray-400 text-sm">Peshawar, Khyber Pakhtunkhwa</p>
            </div>
            <div>
              <h4 className="text-white font-semibold">Email</h4>
              <p className="text-gray-400 text-sm">your.email@example.com</p>
            </div>
            <div>
              <h4 className="text-white font-semibold">Phone</h4>
              <p className="text-gray-400 text-sm">+92 3XX XXXXXXX</p>
            </div>

            {/* Follow Me - Simple Text Links */}
            <div className="pt-4">
              <h4 className="text-white font-semibold mb-3">Follow Me</h4>
              <div className="flex gap-3">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                  className="bg-slate-900 hover:bg-cyan-400/10 px-4 py-2 rounded-lg text-cyan-400 border border-zinc-800">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" 
                  className="bg-slate-900 hover:bg-cyan-400/10 px-4 py-2 rounded-lg text-cyan-400 border border-zinc-800">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center">
          <p className="text-gray-500 text-sm">© 2025 Created By Iqra. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}