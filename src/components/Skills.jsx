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
  const skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Power BI", icon: "📊" },
    { name: "React", icon: <FaReact /> },
    { name: "Machine Learning", icon: "🤖" },
    { name: "Data Analytics", icon: "📈" },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
  ];

  return (
    <section id="skills" className="px-6 py-20">
      <h2 className="text-5xl font-extrabold text-center mb-16">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
            bg-white/10
            backdrop-blur-xl
            border border-cyan-400/20
            rounded-2xl
            p-6
            text-center
            shadow-xl
            shadow-cyan-500/10
            hover:scale-105
            hover:border-cyan-400
            hover:shadow-cyan-500/30
            transition-all
            duration-300
            "
          >
            <div className="text-5xl text-cyan-300 mb-4 flex justify-center">
              {skill.icon}
            </div>

            <h3 className="text-lg font-bold">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;