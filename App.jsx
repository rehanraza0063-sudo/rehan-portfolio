import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Research from "./sections/Research.jsx";
import Projects from "./sections/Projects.jsx";
import Writing from "./sections/Writing.jsx";
import Skills from "./sections/Skills.jsx";
import Achievements from "./sections/Achievements.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Research />
        <Projects />
        <Writing />
        <Skills />
        <Achievements />
      </main>
      <Contact />
      <Footer />
    </>
  );
}
