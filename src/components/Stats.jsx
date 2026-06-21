function Stats() {
  const stats = [
    {
      number: "8.46",
      title: "CGPA",
    },
    {
      number: "4+",
      title: "Certifications",
    },
    {
      number: "3+",
      title: "Projects",
    },
    {
      number: "3",
      title: "Internships",
    },
  ];

  return (
    <section className="px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="
            bg-white/10
            backdrop-blur-xl
            border
            border-cyan-400/20
            rounded-3xl
            p-8
            text-center
            shadow-xl
            shadow-cyan-500/10
            hover:scale-110
            hover:border-cyan-400
            hover:shadow-cyan-500/40
            transition-all
            duration-300
            "
          >
            <h3
              className="
              text-5xl
              font-extrabold
              text-cyan-400
              "
            >
              {item.number}
            </h3>

            <p
              className="
              mt-3
              text-lg
              text-gray-300
              "
            >
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;