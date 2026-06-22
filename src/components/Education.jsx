function Education() {
  return (
    <section
      id="education"
      className="px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Education
      </h2>

      <div className="max-w-6xl mx-auto">

        {/* B.Tech */}

        <div className="flex mb-12">
          <div className="flex flex-col items-center mr-6">
            <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
            <div className="w-1 h-full bg-blue-500"></div>
          </div>

          <div
            className="
bg-white/10
backdrop-blur-xl
border
border-cyan-400/20
p-8
rounded-2xl
shadow-xl
shadow-cyan-500/10
hover:-translate-y-2 hover:scale-105
transition-all
duration-300
"
          >
            <h3 className="text-3xl font-bold text-blue-300">
              B.Tech - Computer Science and Engineering
            </h3>

            <p className="mt-2">
              Sanketika Vidya Parishad Engineering College
            </p>

            <p>
              Affiliated to Andhra University,
              Visakhapatnam
            </p>

            <p className="mt-2">
              2023 - 2027 (Pursuing)
            </p>

            <p>
              CGPA: 8.46 / 10
            </p>
          </div>
        </div>

        {/* Intermediate */}

        <div className="flex mb-12">
          <div className="flex flex-col items-center mr-6">
            <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
            <div className="w-1 h-full bg-blue-500"></div>
          </div>

          <div
            className="
bg-white/10
backdrop-blur-xl
border
border-cyan-400/20
p-8
rounded-2xl
shadow-xl
shadow-cyan-500/10
hover:-translate-y-2 hover:scale-105
transition-all
duration-300
"
          >
            <h3 className="text-3xl font-bold text-blue-300">
              Intermediate (MPC)
            </h3>

            <p>
              Sri Chaitanya Junior College
            </p>

            <p>
              Board of Intermediate Education Andhra Pradesh
            </p>

            <p>
              2021 - 2023
            </p>

            <p>
              Percentage: 72%
            </p>
          </div>
        </div>

        {/* SSC */}

        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
          </div>

          <div
            className="
bg-white/10
backdrop-blur-xl
border
border-cyan-400/20
p-8
rounded-2xl
shadow-xl
shadow-cyan-500/10
hover:-translate-y-2 hover:scale-105
transition-all
duration-300
"
          >
            <h3 className="text-3xl font-bold text-blue-300">
              Secondary School Education
            </h3>

            <p>
              SSS Oxford High School
            </p>

            <p>
              Pendurthi, Visakhapatnam
            </p>

            <p>
              Passed: 2021
            </p>

            <p>
              Percentage: 95%
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;