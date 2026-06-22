import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-24">

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
        float-animation
        "
      />

      <h1 className="text-7xl font-extrabold mt-4 tracking-wide">
        <span className="text-cyan-400">
          Srinivas Dadi 
        </span>
      </h1>

      <p className="text-cyan-300 text-xl mt-5 font-semibold">
        Aspiring Software Engineer | Data Analytics Enthusiast | Full Stack Developer
      </p>

      <h2 className="text-4xl text-blue-400 mt-3">
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            1500,
            "Data Analytics Enthusiast",
            1500,
            "Machine Learning Explorer",
            1500,
            "AWS Cloud Learner",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h2>

      <p className="mt-6 max-w-5xl text-lg text-gray-300 leading-relaxed">
        Aspiring Software Engineer and Computer Science Engineering student passionate about
        Data Analytics, Artificial Intelligence, Machine Learning, Cloud Computing and
        Full Stack Development. Dedicated to building scalable solutions and solving
        real-world problems through technology.
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">

        <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/20">
          Data Analytics
        </span>

        <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/20">
          Machine Learning
        </span>

        <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/20">
          Full Stack Development
        </span>

        <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/20">
          AWS Cloud
        </span>

      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
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

        <a
          href="#projects"
          className="
          px-8
          py-4
          rounded-xl
          border
          border-cyan-400
          hover:bg-cyan-500/20
          transition-all
          duration-300
          "
        >
          View Projects
        </a>

      </div>

      {/* Social Links */}
      <div className="flex gap-8 mt-8">

        <a
          href="https://github.com/dadisrinivas0513"
          target="_blank"
          rel="noopener noreferrer"
          className="
          flex
          items-center
          gap-2
          text-xl
          hover:text-cyan-400
          transition-all
          duration-300
          "
        >
          <FaGithub className="text-3xl" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/dadi-srinivas-05m032005"
          target="_blank"
          rel="noopener noreferrer"
          className="
          flex
          items-center
          gap-2
          text-xl
          hover:text-cyan-400
          transition-all
          duration-300
          "
        >
          <FaLinkedin className="text-3xl" />
          <span>LinkedIn</span>
        </a>

      </div>

      {/* Availability Status */}
      <div className="mt-6 text-cyan-300 font-semibold text-lg">
        🚀 Available for Internships • Open to Opportunities
      </div>

    </section>
  );
}

export default Hero;