function Internships() {
const internships = [
{
year: "2025",
title: "AWS Cloud Internship",
company: "HMIES Solutions",
duration: "May 2025 – June 2025",
domain: "Cloud Computing • AWS Services",
description:
"Worked with AWS cloud services including EC2, S3, IAM and deployment concepts. Gained practical experience in cloud infrastructure, security management and application deployment workflows."
},

{
  year: "2026",
  title: "Artificial Intelligence Internship",
  company: "DataPro",
  duration: "May 2026 – June 2026",
  domain: "Generative AI • Prompt Engineering",
  description:
    "Built AI agents, prompt engineering workflows, automation systems and LLM-powered applications. Explored Generative AI architectures, reasoning workflows and task automation using modern AI tools."
},

{
  year: "2026",
  title: "Data Analytics Internship",
  company: "NAVODITA INFOTECH",
  duration: "June 2026",
  domain: "Data Analytics • Machine Learning",
  description:
    "Performed customer segmentation, dashboard creation, business analytics and insight generation. Applied machine learning techniques and data visualization to derive actionable business insights."
}

];

return ( <section id="internships" className="px-6 py-20"> <h2 className="text-5xl font-extrabold text-center mb-20">
Professional Experience </h2>

  <div className="max-w-5xl mx-auto">

    {internships.map((item, index) => (
      <div
        key={index}
        className="flex gap-8 mb-12 items-start"
      >

        <div
          className="
          min-w-[90px]
          text-cyan-400
          font-bold
          text-xl
          pt-3
          "
        >
          {item.year}
        </div>

        <div className="flex flex-col items-center">

          <div
            className="
            w-5
            h-5
            rounded-full
            bg-cyan-400
            shadow-lg
            shadow-cyan-400
            "
          ></div>

          {index !== internships.length - 1 && (
            <div
              className="
              w-1
              h-40
              bg-gradient-to-b
              from-cyan-400
              to-blue-700
              "
            ></div>
          )}

        </div>

        <div
          className="
          flex-1
          p-8
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border
          border-cyan-400/20
          shadow-xl
          hover:-translate-y-2 hover:scale-105
          hover:border-cyan-400
          transition-all
          duration-300
          "
        >
          <h3 className="text-2xl font-bold text-cyan-300">
            {item.title}
          </h3>

          <p className="mt-2 text-lg">
            {item.company}
          </p>

          <p className="text-cyan-300 mt-2">
            {item.domain}
          </p>

          <p className="text-gray-400 mt-1">
            {item.duration}
          </p>

          <p className="mt-4 text-gray-300 leading-7">
            {item.description}
          </p>
        </div>

      </div>
    ))}

  </div>
</section>

);
}

export default Internships;
