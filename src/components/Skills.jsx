import {
FaPython,
FaJava,
FaReact,
FaGitAlt,
FaGithub,
FaHtml5,
FaCss3Alt,
FaJs,
} from "react-icons/fa";

import { SiMysql } from "react-icons/si";

function Skills() {
const skillCategories = [
{
title: "Programming Languages",
skills: ["C", "Python", "Java", "JavaScript"],
},

{
  title: "Frontend Development",
  skills: ["React", "HTML", "CSS"],
},

{
  title: "Data Analytics & AI",
  skills: ["Power BI", "Machine Learning", "Data Analytics"],
},

{
  title: "Tools & Platforms",
  skills: ["Git", "GitHub", "MySQL", "Microsoft Excel", "Microsoft Office"],
},

];

return ( <section id="skills" className="px-6 py-20"> <h2 className="text-5xl font-extrabold text-center mb-16">
Skills </h2>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
    {skillCategories.map((category, index) => (
      <div
        key={index}
        className="
        bg-white/10
        backdrop-blur-xl
        border border-cyan-400/20
        rounded-3xl
        p-8
        hover:border-cyan-400
        hover:-translate-y-2 hover:scale-105
        transition-all
        duration-300
        "
      >
        <h3 className="text-2xl font-bold text-cyan-300 mb-6">
          {category.title}
        </h3>

        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill, i) => (
            <span
              key={i}
              className="
              px-4
              py-2
              rounded-full
              bg-cyan-500/20
              border border-cyan-400/20
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

);
}

export default Skills;
