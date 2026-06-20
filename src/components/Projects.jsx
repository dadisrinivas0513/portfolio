import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
return ( <section
   id="projects"
   className="px-10 py-20"
 > <h2 className="text-5xl font-extrabold text-center mb-16">
Projects </h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Project 1 */}

    <div
      className="
      bg-white/10
      backdrop-blur-xl
      border border-cyan-400/20
      p-8
      rounded-3xl
      shadow-xl
      hover:scale-105
      hover:border-cyan-400
      transition-all
      duration-300
      "
    >
      <h3 className="text-2xl font-bold text-cyan-300">
        Customer Segmentation Analysis
      </h3>

      <p className="mt-4 text-gray-300">
        Developed a customer segmentation model using
        Data Analytics techniques to identify customer
        groups and support targeted marketing decisions.
      </p>

      <div className="flex gap-4 mt-6">

        <button
          className="
          px-5 py-2
          rounded-xl
          bg-gray-700
          cursor-not-allowed
          "
        >
          Coming Soon
        </button>

      </div>
    </div>

    {/* Project 2 */}

    <div
      className="
      bg-white/10
      backdrop-blur-xl
      border border-cyan-400/20
      p-8
      rounded-3xl
      shadow-xl
      hover:scale-105
      hover:border-cyan-400
      transition-all
      duration-300
      "
    >
      <h3 className="text-2xl font-bold text-cyan-300">
        Personal Portfolio Website
      </h3>

      <p className="mt-4 text-gray-300">
        Built a responsive portfolio website using
        React, Vite and Tailwind CSS to showcase
        education, internships, skills and projects.
      </p>

      <div className="flex gap-4 mt-6">

        <a
          href="https://github.com/dadisrinivas0513/portfolio"
          target="_blank"
          rel="noreferrer"
          className="
          flex items-center gap-2
          px-5 py-2
          rounded-xl
          bg-cyan-600
          hover:bg-cyan-500
          transition-all
          "
        >
          <FaGithub />
          GitHub
        </a>

      </div>
    </div>

  </div>
</section>

);
}

export default Projects;
