function Navbar() {
  return (
    <nav
      className="
px-4
py-1
rounded-x1
bg-gradient-to-r
from-cyan-500
to-blue-900
font-semibold
hover:scale-105
transition-all
duration-300
shadow-lg
shadow-cyan-500/20
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
        <h1 className="text-3xl font-bold text-cyan-400">
          Dadi Srinivas
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
bg-gradient-to-r
from-cyan-500
to-blue-600
font-semibold
hover:scale-105
transition-all
duration-300
shadow-lg
shadow-cyan-500/20
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