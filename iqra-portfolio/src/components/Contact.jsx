import { MapPin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-semibold">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Contact Me</h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16"> {/* 👈 mb-16 add kiya map ke liye space */}
          
          {/* Left: Form */}
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" required
              className="w-full bg-slate-900 border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition" />
            
            <input type="email" placeholder="Email Address" required
              className="w-full bg-slate-900 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition" />
            
            <textarea placeholder="Your Message" rows="5" required
              className="w-full bg-slate-900 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"></textarea>
            
            <button type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 hover:scale-[1.02] text-white font-bold py-3 rounded-lg transition-all duration-300">
              Send
            </button>
          </form>

          {/* Right: Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-cyan-400 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-white">Location</h4>
                <p className="text-gray-400">Peshawar, Khyber Pakhtunkhwa</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-cyan-400 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-white">Email</h4>
                <p className="text-gray-400">iqra@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-cyan-400 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-white">Phone</h4>
                <p className="text-gray-400">+92 3452784293</p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-bold text-white mb-3">Follow Me</h4>
              <div className="flex gap-3">
                <a href="#" target="_blank" className="px-4 py-2 bg-slate-900 rounded-lg text-cyan-400 hover:bg-purple-500/20 border border-zinc-800 hover:border-purple-500 transition">GitHub</a>
                <a href="#" target="_blank" className="px-4 py-2 bg-slate-900 rounded-lg text-cyan-400 hover:bg-purple-500/20 border-zinc-800 hover:border-purple-500 transition">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* 👇 YE WALA MAP KA CODE HAI */}
        <div className="rounded-xl overflow-hidden border border-zinc-800 mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105524.123!2d71.5249!3d34.0151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa0f3b0c4c5b5b5b5!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2sPK!4v1690000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition duration-500"
          ></iframe>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm pt-8 border-t border-zinc-800">
          © 2025 Created By Iqra. All rights reserved.
        </div>
      </div>
    </section>
  )
}