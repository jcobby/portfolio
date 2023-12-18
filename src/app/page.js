import About from "../components/about";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Header from "../components/header";
import Intro from "../components/intro";
import LoginComp from "../components/loginComp";
import Projects from "../components/projects";
import Sectiondivider from "../components/sectiondivider";
import Skills from "../components/skills";
import Image from "next/image";
// import Tyr from "../components/tyr";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      {/* <LoginComp /> */}
      <About />
      <Sectiondivider />
      <Intro />
      <Sectiondivider />

      <Projects />
      <Sectiondivider />

      <Skills />
      <Sectiondivider />

      <Experience />
      <Sectiondivider />

      <Contact />
      {/* <Tyr /> */}

    </div>
  );
}
