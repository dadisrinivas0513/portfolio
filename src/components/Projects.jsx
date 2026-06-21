function Projects() {
const projects = [
{
title: "Customer Segmentation Analysis",
image: "/project-images/customer-segmentation.jpg",
description:
"Developed a Machine Learning-based customer segmentation system using K-Means Clustering to identify customer groups based on income and spending behavior. Generated business insights through data visualization and clustering analysis to support targeted marketing strategies.",
technologies: [
"Python",
"Pandas",
"NumPy",
"Matplotlib",
"Seaborn",
"Scikit-Learn",
],
github: "#",
},
{
title: "Personal Portfolio Website",
image: "/project-images/portfolio-website.jpg",
description:
"Designed and developed a fully responsive personal portfolio website using React, Vite, Tailwind CSS and Vercel. Showcases projects, certifications, internships, achievements and technical skills with modern UI/UX design principles.",
technologies: [
"React",
"Vite",
"Tailwind CSS",
"JavaScript",
"GitHub",
"Vercel",
],
github: "https://github.com/dadisrinivas0513/portfolio",
},
{
  title: "Sales & Revenue Forecasting",
  image: "/project-images/sales-forecasting.png",
  description:
    "Built predictive models to forecast future sales and revenue trends using historical business data. Applied data preprocessing, visualization and forecasting techniques to support data-driven decision making.",
  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-Learn"
  ],
  github: "#",
}
];

return ( <section id="projects" className="px-6 py-20"> <h2 className="text-5xl font-extrabold text-center mb-16">
Projects </h2>

```
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
    {projects.map((project, index) => (
      <div
        key={index}
        className="bg-white/10 backdrop-blur-xl border border-cyan-400/20 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold text-cyan-300 mb-3">
            {project.title}
          </h3>

          <p className="text-gray-300 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-cyan-500/20 border border-cyan-400/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 transition"
          >
            View Project
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

);
}

export default Projects;
