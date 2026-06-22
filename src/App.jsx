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
import Achievements from "./components/Achievements";
import Stats from "./components/Stats";
import GitHubStats from "./components/GitHubStats";
import CallToAction from "./components/CallToAction";
import WhyHireMe from "./components/WhyHireMe";
import FeaturedProject from "./components/FeaturedProject";
import Strengths from "./components/Strengths";
import CurrentlyLearning from "./components/CurrentlyLearning";

function App() {
  return (
    <div className="text-white relative overflow-hidden text-1g">
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
      <GitHubStats />
      <Stats />
      <About />
      <Education />
      <Certifications />
      <Skills />
      <Internships />
      <FeaturedProject />
      <Projects />
      <WhyHireMe />
      <Strengths />
      <CurrentlyLearning />
      <Achievements />
      <CallToAction />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;