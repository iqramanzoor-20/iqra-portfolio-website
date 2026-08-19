function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-4">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-slate-900 border border-white/10 rounded-3xl p-8">

          <form className="space-y-6">

            <div>
              <label className="block text-gray-300 mb-2">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-5 py-3 rounded-xl bg-slate-950 border border-white/10 outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Your Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 rounded-xl bg-slate-950 border border-white/10 outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-5 py-3 rounded-xl bg-slate-950 border border-white/10 outline-none focus:border-cyan-400 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact