function Certifications() {
  const certificates = [
    {
      title: "Data Entry Course",
      organization: "Data Entry Organization",
    },
    {
      title: "Data Analytics",
      organization: "HP",
    },
    {
      title: "Artificial Intelligence",
      organization: "HP",
    },
  ];

  return (
    <section
      id="certifications"
      className="px-10 py-20"
    >
      <h2 className="text-4xl font-bold mb-10">
        Certifications
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl"
          >
            <h3 className="text-xl font-semibold">
              {cert.title}
            </h3>

            <p className="mt-2 text-gray-300">
              {cert.organization}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;