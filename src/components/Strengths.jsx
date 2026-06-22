function Strengths() {
  const strengths = [
    {
      title: "Analytical Thinking",
      description:
        "Strong ability to analyze data, identify patterns and derive meaningful insights."
    },

    {
      title: "Fast Learner",
      description:
        "Quickly adapts to new technologies, frameworks and industry trends."
    },

    {
      title: "Team Collaboration",
      description:
        "Comfortable working in collaborative environments and contributing effectively."
    },

    {
      title: "Problem Solving",
      description:
        "Passionate about solving real-world challenges using technology and innovation."
    }
  ];

  return (
    <section className="px-6 py-20">
      <h2 className="text-5xl font-extrabold text-center mb-16">
        Professional Strengths
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {strengths.map((item, index) => (
          <div
            key={index}
            className="
            p-8
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border border-cyan-400/20
            hover:border-cyan-400
            hover:scale-105
            transition-all
            duration-300
            "
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Strengths;