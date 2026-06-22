function CurrentlyLearning() {
const learning = [
"Advanced React",
"Machine Learning",
"Data Structures & Algorithms",
"AWS Cloud Services",
"Generative AI",
"System Design",
"Full Stack Development",
"Prompt Engineering",
"HTML",
];

return ( <section className="px-6 py-20"> <h2 className="text-5xl font-extrabold text-center mb-16">
Currently Learning </h2>

  <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
    {learning.map((item, index) => (
      <div
        key={index}
        className="
        px-6
        py-3
        rounded-full
        bg-cyan-500/20
        border border-cyan-400/20
        hover:border-cyan-400
        hover:-translate-y-2 hover:scale-105
        transition-all
        duration-300
        "
      >
        {item}
      </div>
    ))}
  </div>
</section>

);
}

export default CurrentlyLearning;
