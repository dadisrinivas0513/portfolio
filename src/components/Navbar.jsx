function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-black/20
      border-b
      border-white/10
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-5
        flex
        justify-between
        items-center
        "
      >
        <h1 className="text-2xl font-bold text-cyan-400">
          Srinivas
        </h1>

        <div className="flex gap-8 text-lg">

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#education" className="hover:text-cyan-400 transition">
            Education
          </a>

          <a href="#certifications" className="hover:text-cyan-400 transition">
            Certifications
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#internships" className="hover:text-cyan-400 transition">
            Internships
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#achievements" className="hover:text-cyan-400 transition">
            Achievements
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

          <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
  px-4
  py-2
  rounded-xl
  bg-cyan-600
  hover:bg-cyan-500
  transition-all
  duration-300
  "
>
  Resume
</a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;