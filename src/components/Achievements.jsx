function Achievements() {
  const achievements = [
    {
      title: "Deloitte Data Analytics Job Simulation",
      description:
        "Successfully completed Deloitte Data Analytics Job Simulation through Forage.",
    },
    {
      title: "Microsoft AI Certification",
      description:
        "Completed Artificial Intelligence for Everyone certification by Microsoft.",
    },
    {
      title: "NSDC Web Development Certification",
      description:
        "Completed Web Design & Development certification through Skill India.",
    },
    {
      title: "Data Science Master Class",
      description:
        "Successfully completed Data Science Master Class by Pantech e Learning.",
    },
  ];

  return (
    <section id="achievements" className="px-6 py-20">
      <h2 className="text-5xl font-extrabold text-center mb-16">
        Achievements
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="
            bg-white/10
            backdrop-blur-xl
            border border-cyan-400/20
            rounded-3xl
            p-8
            shadow-xl
            shadow-cyan-500/10
            hover:-translate-y-2 hover:scale-105
            hover:border-cyan-400
            transition-all
            duration-300
            "
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">
              {item.title}
            </h3>

            <p className="text-gray-300 leading-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;