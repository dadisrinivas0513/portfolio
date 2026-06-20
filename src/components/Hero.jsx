import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Hero() {
  return (
    <section 
    className="min-h-screen flex flex-col justify-center items-center text-center pt-24"
    >

      <img
        src="/profile.jpg"
        alt="Profile"
className="
w-48
h-48
rounded-full
border-4
border-blue-500
shadow-2xl
hover:scale-105
transition-all
duration-300
"
      />

      <h1 className="text-7xl font-extrabold mt-6">
        Srinivas Dadi
      </h1>

      <h2 className="text-3xl text-blue-300 mt-3">
  <TypeAnimation
    sequence={[
      "Data Analytics Enthusiast",
      1500,
      "AI Learner",
      1500,
      "Full Stack Developer",
      1500,
      "Machine Learning Explorer",
      1500,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</h2>

      <p className="mt-4 max-w-xl">
        B.Tech CSE student at Sanketika Vidya Parishad Engineering College with experience in Data Analytics, AWS Cloud, Agentic AI and Full Stack Development.
      </p>

      <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
className="
mt-8
inline-block
px-8
py-4
rounded-xl
bg-gradient-to-r
from-blue-600
to-indigo-700
hover:scale-105
transition-all
duration-300
shadow-xl
"
>
  Download Resume
</a>

<div className="flex gap-6 mt-6">

  <a
    href="https://github.com/dadisrinivas0513"
    target="_blank"
    rel="noopener noreferrer"
    className="
    text-4xl
    text-white
    hover:text-cyan-500
    hover:scale-105
    transition-all
    duration-300
    "
  >
    <FaGithub />
    <span className="text-lg">GitHub</span>
  </a>

  <a
    href="https://www.linkedin.com/in/dadi-srinivas-05m032005"
    target="_blank"
    rel="noopener noreferrer"
    className="
    text-4xl
    text-white
    hover:text-cyan-500
    hover:scale-105
    transition-all
    duration-300
    "
  >
    <FaLinkedin />
    <span className="text-lg">Linkedin</span>
  </a>

</div>
    </section>
  );
}

export default Hero;