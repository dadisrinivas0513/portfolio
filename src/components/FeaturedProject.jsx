import { FaGithub } from "react-icons/fa";

function FeaturedProject() {
  return (
    <section className="px-6 py-20">
      <h2 className="text-5xl font-extrabold text-center mb-16">
        Featured Project
      </h2>

      <div
        className="
        max-w-6xl
        mx-auto
        bg-white/10
        backdrop-blur-xl
        border border-cyan-400/20
        rounded-3xl
        overflow-hidden
        hover:border-cyan-400
        transition-all
        duration-300
        "
      >
        <img
          src="/project-images/customer-segmentation.jpg"
          alt="Customer Segmentation"
          className="w-full h-80 object-cover"
        />

        <div className="p-8">
          <h3 className="text-4xl font-bold text-cyan-300 mb-4">
            Customer Segmentation Analysis
          </h3>

          <p className="text-gray-300 leading-8 mb-6">
            Machine Learning based customer segmentation system
            using K-Means Clustering to identify customer groups
            based on income and spending behaviour.
            Generated business insights and visualizations that
            support targeted marketing strategies.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 rounded-full bg-cyan-500/20">
              Python
            </span>

            <span className="px-4 py-2 rounded-full bg-cyan-500/20">
              Machine Learning
            </span>

            <span className="px-4 py-2 rounded-full bg-cyan-500/20">
              Data Analytics
            </span>

            <span className="px-4 py-2 rounded-full bg-cyan-500/20">
              Scikit-Learn
            </span>
          </div>

          <a
            href="https://github.com/dadisrinivas0513/Customer-Segmentation-Analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            gap-2
            px-6
            py-3
            rounded-xl
            bg-cyan-600
            hover:bg-cyan-500
            transition
            "
          >
            <FaGithub />
            View Repository
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;