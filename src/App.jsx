import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Internships from "./components/Internships";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-white relative overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">

  <div
    className="
    absolute
    top-20
    left-20
    w-72
    h-72
    bg-cyan-500/20
    rounded-full
    blur-3xl
    animate-pulse
    "
  ></div>

  <div
    className="
    absolute
    bottom-20
    right-20
    w-96
    h-96
    bg-blue-600/20
    rounded-full
    blur-3xl
    animate-pulse
    "
  ></div>

  <div
    className="
    absolute
    top-1/2
    left-1/2
    w-80
    h-80
    bg-indigo-500/20
    rounded-full
    blur-3xl
    animate-pulse
    "
  ></div>

</div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Internships />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;