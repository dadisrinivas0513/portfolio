function About() {
  return (
    <section
      id="about"
      className="py-20 flex items-center justify-center px-6"
    >
      <div
        className="
max-w-4xl
p-10
rounded-3xl
bg-white/20
backdrop-blur-xl
border
border-cyan-400/30
shadow-2xl
shadow-cyan-500/20
hover:scale-105
transition-all
duration-300
"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">
          About Me
        </h2>

        <p className="text-lg leading-8 text-center">
          I am <span className="font-semibold text-blue-300">Srinivas Dadi</span>,
          a Computer Science Engineering student with a CGPA of 8.46.
          I am passionate about Data Analytics, Machine Learning,
          Artificial Intelligence, and Full Stack Development.
          I enjoy solving real-world problems through technology and
          continuously learning new skills.
        </p>
      </div>
    </section>
  );
}

export default About;