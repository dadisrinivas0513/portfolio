function Journey() {
const journey = [
{
year: "2021",
title: "SSC Completed",
description: "Completed Secondary School Education with 95%."
},

{
  year: "2023",
  title: "Intermediate (MPC)",
  description: "Completed Intermediate with 72%."
},

{
  year: "2023",
  title: "B.Tech CSE Started",
  description: "Joined Sanketika Vidya Parishad Engineering College."
},

{
  year: "2025",
  title: "AWS Internship",
  description: "Worked on AWS Cloud Computing and deployment concepts."
},

{
  year: "2026",
  title: "Artificial Intelligence Internship",
  description: "Built AI agents and worked on prompt engineering."
},

{
  year: "2026",
  title: "Data Analytics Internship",
  description: "Performed analytics, dashboards and ML-based insights."
}

];

return ( <section className="px-6 py-20"> <h2 className="text-5xl font-extrabold text-center mb-16">
My Journey </h2>

  <div className="max-w-5xl mx-auto">
    {journey.map((item, index) => (
      <div
        key={index}
        className="
        flex
        gap-6
        mb-10
        items-start
        "
      >
        <div className="text-cyan-400 font-bold min-w-[80px]">
          {item.year}
        </div>

        <div
          className="
          flex-1
          p-6
          rounded-2xl
          bg-white/10
          backdrop-blur-xl
          border border-cyan-400/20
          hover:border-cyan-400
          transition-all
          duration-300
          "
        >
          <h3 className="text-xl font-bold text-cyan-300">
            {item.title}
          </h3>

          <p className="text-gray-300 mt-2">
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

);
}

export default Journey;
