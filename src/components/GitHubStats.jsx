function GitHubStats() {
  const stats = [
    {
      value: "3+",
      title: "Projects",
    },
    {
      value: "4+",
      title: "Certifications",
    },
    {
      value: "3",
      title: "Internships",
    },
    {
      value: "8.46",
      title: "CGPA",
    },
  ];

  return (
    <section className="px-6 py-20">
      <h2 className="text-5xl font-extrabold text-center mb-16">
        Highlights
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="
            bg-white/10
            backdrop-blur-xl
            border border-cyan-400/20
            rounded-3xl
            p-8
            text-center
            hover:border-cyan-400
            hover:-translate-y-2 hover:scale-105
            transition-all
            duration-300
            "
          >
            <h3 className="text-5xl font-extrabold text-cyan-400">
              {item.value}
            </h3>

            <p className="mt-3 text-gray-300">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GitHubStats;