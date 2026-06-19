function Projects() {
  return (
    <section
      id="projects"
      className="px-10 py-20"
    >
      <h2 className="text-4xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

<div
  className="
bg-white/10
backdrop-blur-xl
border border-cyan-400/20
p-8
rounded-3xl
shadow-2xl
shadow-cyan-500/10
hover:scale-105
hover:border-cyan-400
hover:shadow-cyan-500/30
transition-all
duration-300
"
>          <h3 className="text-2xl font-semibold">
            Customer Segmentation Analysis
          </h3>

          <p className="mt-3">
            Developed a customer segmentation model using
            Data Analytics techniques to identify customer
            groups and support targeted marketing decisions.
          </p>
        </div>

<div
  className="
bg-white/10
backdrop-blur-xl
border border-cyan-400/20
p-8
rounded-3xl
shadow-2xl
shadow-cyan-500/10
hover:scale-105
hover:border-cyan-400
hover:shadow-cyan-500/30
transition-all
duration-300
"
>          <h3 className="text-2xl font-semibold">
            Personal Portfolio Website
          </h3>

          <p className="mt-3">
            Built a responsive portfolio website using
            React, Tailwind CSS and Vite to showcase
            education, internships, skills and projects.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;