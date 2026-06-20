function Internships() {
  return (
    <section
      id="internships"
      className="px-6 py-20"
    >
      <h2 className="text-5xl font-extrabold text-center mb-20">
        Internships
      </h2>

      <div className="relative max-w-5xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-700"></div>

        {/* Internship 1 */}
        <div className="relative pl-16 mb-16">

          <div className="absolute left-0 top-3 w-8 h-8 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400"></div>

          <div
            className="
            p-8
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            shadow-2xl
            hover:scale-105
            hover:border-cyan-400
            hover:shadow-cyan-500/40
            transition-all
            duration-300
            "
          >
            <h3 className="text-3xl font-bold text-cyan-300">
              AWS Internship
            </h3>

            <p className="mt-2 text-lg">
              HMIES Solutions
            </p>

            <p className="text-gray-300">
              May 2025 – June 2025
            </p>

            <p className="mt-4 text-gray-300">
              Worked with AWS cloud services including EC2, S3,
              IAM and deployment concepts.
            </p>
          </div>
        </div>

        {/* Internship 2 */}
        <div className="relative pl-16 mb-16">

          <div className="absolute left-0 top-3 w-8 h-8 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400"></div>

          <div
            className="
            p-8
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            shadow-2xl
            hover:scale-105
            hover:border-cyan-400
            hover:shadow-cyan-500/40
            transition-all
            duration-300
            "
          >
            <h3 className="text-3xl font-bold text-cyan-300">
              Agentic AI Internship
            </h3>

            <p className="mt-2 text-lg">
              DataPro
            </p>

            <p className="text-gray-300">
              May 2026 – June 2026
            </p>

            <p className="mt-4 text-gray-300">
              Built AI agents, prompt engineering workflows,
              automation systems and LLM-powered applications.
            </p>
          </div>
        </div>

        {/* Internship 3 */}
        <div className="relative pl-16">

          <div className="absolute left-0 top-3 w-8 h-8 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400"></div>

          <div
            className="
            p-8
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            shadow-2xl
            hover:scale-105
            hover:border-cyan-400
            hover:shadow-cyan-500/40
            transition-all
            duration-300
            "
          >
            <h3 className="text-3xl font-bold text-cyan-300">
              Data Analytics Internship
            </h3>

            <p className="mt-2 text-lg">
              NAVODITA INFOTECH
            </p>

            <p className="text-gray-300">
              June 2026
            </p>

            <p className="mt-4 text-gray-300">
              Performed customer segmentation, dashboard creation,
              business analytics and insight generation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Internships;