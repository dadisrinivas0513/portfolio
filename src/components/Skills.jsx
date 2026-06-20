function Skills() {
const skills = [
"Python",
"Java",
"MySQL",
"Power BI",
"React",
"Machine Learning",
"Data Analytics",
"Git",
"GitHub",
"HTML",
"CSS",
"JavaScript",
];

return ( <section
   id="skills"
   className="px-6 py-20"
 > <h2 className="text-5xl font-extrabold text-center mb-16">
Skills </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="
        bg-white/10
        backdrop-blur-xl
        border border-cyan-400/20
        rounded-2xl
        p-5
        text-center
        shadow-xl
        shadow-cyan-500/10
        hover:scale-105
        hover:border-cyan-400
        transition-all
        duration-300
        "
      >
        <h3 className="text-xl font-bold text-cyan-300">
          {skill}
        </h3>
      </div>
    ))}
  </div>
</section>

);
}

export default Skills;
