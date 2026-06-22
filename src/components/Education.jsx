function Education() {
  return (
    <section
      id="education"
      className="px-8 py-20"
    >
      <h2 className="text-5xl font-bold text-center mb-13">
        Education
      </h2>

      <div className="max-w-8xl mx-2-auto">

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
border-cyan-200/40
p-7
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

            <p className="mt-1">
              Batch: 2023 - 2027 (Pursuing)
            </p>

            <p>
              CGPA: 8.46 / 10 (Up to 6th Semester)
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
border-cyan-200/40
p-7
rounded-2xl
shadow-xl
shadow-cyan-500/10
hover:-translate-y-2 hover:scale-105
transition-all
duration-300
"
          >
            <h3 className="text-3xl font-bold text-blue-300">
              Intermediate (Maths, Physics & Chemistry)
            </h3>

            <p>
              Sri Chaitanya Junior College, NAD
            </p>

            <p>
              Board of Intermediate Education Andhra Pradesh (BIEAP)
            </p>

            <p>
              Batch: 2021 - 2023
            </p>

            <p>
              Percentage: 72%
            </p>
          </div>
        </div>

        {/* SSC */}

        <div className="flex mb-12">
          <div className="flex flex-col items-center mr-6">
            <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
          </div>

          <div
            className="
bg-white/10
backdrop-blur-xl
border
border-cyan-200/40
p-7
rounded-2xl
shadow-xl
shadow-cyan-500/10
hover:-translate-y-2 hover:scale-105
transition-all
duration-300
"
          >
            <h3 className="text-3xl font-bold text-blue-300">
              Board of Secondary School Education (SSC)
            </h3>

            <p>
              SSS Oxford High School, Pendurthi
            </p>

            <p>
              Visakhapatnam, Andhra Pradesh
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