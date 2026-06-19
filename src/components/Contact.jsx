function Contact() {
  return (
    <section
      id="contact"
      className="py-20 flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold mb-8">
        Contact Me
      </h2>

      <p className="mb-4">
        Email: dadisrinivas93911@gmail.com
      </p>

      <div className="flex gap-6">

        <a
          href="https://github.com/dadisrinivas0513"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 px-6 py-3 rounded-xl"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/dadi-srinivas-05m032005"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-800 px-6 py-3 rounded-xl"
        >
          LinkedIn
        </a>

      </div>
    </section>
  );
}

export default Contact;