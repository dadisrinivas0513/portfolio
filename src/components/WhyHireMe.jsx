function WhyHireMe() {
  const points = [
    {
      title: "Problem Solver",
      description:
        "Strong analytical thinking and ability to solve real-world business problems."
    },
    {
      title: "Data Analytics",
      description:
        "Experience in customer segmentation, forecasting and data-driven decision making."
    },
    {
      title: "Full Stack Development",
      description:
        "Capable of building responsive web applications using modern technologies."
    },
    {
      title: "Continuous Learner",
      description:
        "Actively learning AI, Machine Learning, Cloud Computing and Software Engineering."
    }
  ];

  return (
    <section className="px-6 py-20">
      <h2 className="text-5xl font-extrabold text-center mb-16">
        Why Hire Me?
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {points.map((point, index) => (
          <div
            key={index}
            className="
            p-8
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border border-cyan-400/20
            hover:border-cyan-400
            hover:-translate-y-2 hover:scale-105
            transition-all
            duration-300
            "
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-3">
              {point.title}
            </h3>

            <p className="text-gray-300">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyHireMe;