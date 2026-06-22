import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
const projects = [
{
title: "Customer Segmentation Analysis",
image: "/project-images/customer-segmentation.jpg",
description:
"Developed a Machine Learning-based customer segmentation system using K-Means Clustering to identify customer groups based on income and spending behavior. Generated business insights through data visualization and clustering analysis to support targeted marketing strategies.",
features: [
"K-Means Clustering",
"Customer Behavior Analysis",
"Data Visualization",
"Business Insights Generation",
],
technologies: [
"Python",
"Pandas",
"NumPy",
"Matplotlib",
"Seaborn",
"Scikit-Learn",
],
github: "https://github.com/dadisrinivas0513/Customer-Segmentation-Analysis",
demo: "#",
},

{
title: "Personal Portfolio Website",
image: "/project-images/portfolio-website.jpg",
description:
"Designed and developed a fully responsive personal portfolio website using React, Vite, Tailwind CSS and Vercel. Showcases projects, certifications, internships, achievements and technical skills with modern UI/UX design principles.",
features: [
"Responsive Design",
"Modern UI/UX",
"GitHub Integration",
"Vercel Deployment",
],
technologies: [
"React",
"Vite",
"Tailwind CSS",
"JavaScript",
"GitHub",
"Vercel",
],
github: "https://github.com/dadisrinivas0513/portfolio",
demo: "https://portfolio-sooty-nine-dtv0gf3rt3.vercel.app",
},

{
title: "Sales & Revenue Forecasting",
image: "/project-images/sales-forecasting.png",
description:
"Built predictive models to forecast future sales and revenue trends using historical business data. Applied data preprocessing, visualization and forecasting techniques to support data-driven decision making.",
features: [
"Sales Forecasting",
"Revenue Prediction",
"Data Preprocessing",
"Trend Analysis",
],
technologies: [
"Python",
"Pandas",
"NumPy",
"Matplotlib",
"Scikit-Learn",
],
github: "https://github.com/dadisrinivas0513/MutualFundAnalytics",
demo: "#",
},
];

return ( <section id="projects" className="px-6 py-20"> <h2 className="text-5xl font-extrabold text-center mb-16">
Projects </h2>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
    {projects.map((project, index) => (
      <div
        key={index}
        className="bg-white/10 backdrop-blur-xl border border-cyan-400/20 rounded-3xl overflow-hidden hover:border-cyan-400 hover:scale-105 transition duration-500"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover"
        />

        <div className="p-6">
          <h3 className="text-3xl font-bold text-cyan-300 mb-2">
            {project.title}
          </h3>

          <p className="text-gray-300 mb-4">
            {project.description}
          </p>

          <div className="mb-5">
            <h4 className="text-cyan-300 font-semibold mb-1">
              Key Features
            </h4>

            <ul className="text-gray-300 text-sm space-y-1">
              {project.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-cyan-500/20 border border-cyan-400/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-4">

<a
href={project.github}
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 transition"

>

<FaGithub />

GitHub Repository

  </a>

<a
href={project.demo}
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-500/20 transition"

>

<FaExternalLinkAlt />
Live Demo

  </a>

</div>

        </div>
      </div>
    ))}
  </div>
</section>

);
}

export default Projects;
