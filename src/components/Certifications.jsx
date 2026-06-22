function Certifications() {
const certifications = [
{
title: "Deloitte Data Analytics Job Simulation",
organization: "Deloitte | Forage",
year: "2026",
file: "/certificates/deloitte-data-analytics.pdf",
},
{
title: "Artificial Intelligence for Everyone",
organization: "Microsoft | Skill India",
year: "2026",
file: "/certificates/microsoft-ai.pdf",
},
{
title: "Web Design & Development",
organization: "NSDC | Skill India Digital Hub",
year: "2026",
file: "/certificates/nsdc-web-development.pdf",
},
{
title: "AI Workshop",
organization: "Pantech e Learning Pvt. Ltd.",
year: "2026",
file: "/Certificates/pantech-ai-workshop.pdf",
},
{
title: "Data Science for Everyone",
organization: "NSDC | Skill India Digital Hub",
year: "April 08,2026",
Duration: "120 Hours",
file: "/Certificates/data-science-for-everyone.pdf",
},
{
title: "Generative AI",
organization: "LinkedIn e Learning",
year: "July 07,2025",
file: "/Certificates/generative-ai.pdf",
},
];

return ( <section id="certifications" className="px-6 py-20"> <h2 className="text-5xl font-extrabold text-center mb-16">
Certifications </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
    {certifications.map((cert, index) => (
      <div
        key={index}
        className="
        bg-white/10
        backdrop-blur-xl
        border border-cyan-400/20
        rounded-3xl
        p-6
        shadow-xl
        shadow-cyan-500/10
        hover:-translate-y-2 hover:scale-105
        hover:border-cyan-400
        hover:-translate-y-2
        hover:shadow-cyan-500/30
        transition-all
        duration-300
        "
      >
        <h3 className="text-2xl font-bold text-cyan-300">
          {cert.title}
        </h3>

        <p className="mt-3">
          {cert.organization}
        </p>

        <p className="text-gray-400 mt-2">
          {cert.year}
        </p>

        <a
          href={cert.file}
          target="_blank"
          rel="noopener noreferrer"
          className="
          inline-block
          mt-5
          px-5
          py-2
          rounded-xl
          bg-cyan-500
          text-white
          font-semibold
          border
          border-cyan-300
          shadow-lg
          shadow-cyan-500/30
          hover:bg-cyan-400
          hover:-translate-y-2 hover:scale-105
          transition-all
          hover:-translate-y-2
          hover:shadow-cyan-500/30
          duration-300
          "
        >
          📜 View Certificate
        </a>
      </div>
    ))}
  </div>
</ section>

);
}

export default Certifications;
