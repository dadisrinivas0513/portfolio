function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-20"
    >
      <h2 className="text-5xl font-extrabold text-center mb-16">
        Contact Me
      </h2>

      <div
        className="
        max-w-5xl
        mx-auto
        bg-white/10
        backdrop-blur-xl
        border
        border-cyan-400/20
        rounded-3xl
        p-10
        text-center
        shadow-xl
        shadow-cyan-500/10
        "
      >
        <p className="text-2xl mb-3">
          📧 <span className="font-semibold">Email:</span>
          <br />
          dadisrinivas0513@gmail.com
        </p>

        <p className="text-2xl mb-3">
          📱 <span className="font-semibold">Phone:</span>
          <br />
          +91 93911 87753
        </p>

        <p className="text-2xl mb-3">
          📍 <span className="font-semibold">Location:</span>
          <br />
          Visakhapatnam, Andhra Pradesh
        </p>

        <p className="text-2xl mb-8">
          🌐 <span className="font-semibold">Portfolio:</span>
          <br />
          portfolio-sooty-nine-dtv0gf3rt3.vercel.app
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="mailto:dadisrinivas0513@gmail.com"
            className="
            px-6
            py-3
            rounded-xl
            bg-cyan-600
            hover:bg-cyan-500
            transition-all
            duration-300
            "
          >
            📧 Email Me
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
            px-6
            py-3
            rounded-xl
            bg-indigo-600
            hover:bg-indigo-500
            transition-all
            duration-300
            "
          >
            📄 Resume
          </a>

          <a
            href="https://github.com/dadisrinivas0513"
            target="_blank"
            rel="noopener noreferrer"
            className="
            px-6
            py-3
            rounded-xl
            bg-gray-700
            hover:bg-gray-600
            transition-all
            duration-300
            "
          >
            🐙 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dadi-srinivas-05m032005"
            target="_blank"
            rel="noopener noreferrer"
            className="
            px-6
            py-3
            rounded-xl
            bg-blue-700
            hover:bg-blue-600
            transition-all
            duration-300
            "
          >
            💼 LinkedIn
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;