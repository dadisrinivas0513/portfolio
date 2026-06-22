function CallToAction() {
  return (
    <section className="px-6 py-20">
      <div
        className="
        max-w-6xl
        mx-auto
        p-10
        rounded-3xl
        bg-gradient-to-r
        from-cyan-600/20
        to-blue-700/20
        backdrop-blur-xl
        border
        border-cyan-400/20
        text-center
        "
      >
        <h2 className="text-4xl font-extrabold mb-4">
          Looking for a Software Engineering Intern?
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-8">
          Passionate Computer Science student with experience in
          Data Analytics, Machine Learning, Full Stack Development
          and Cloud Computing. Open to internships, freelance work
          and collaborative projects.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
            px-8
            py-3
            rounded-xl
            bg-cyan-600
            hover:bg-cyan-500
            transition
            "
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="
            px-8
            py-3
            rounded-xl
            border
            border-cyan-400
            hover:bg-cyan-500/20
            transition
            "
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;