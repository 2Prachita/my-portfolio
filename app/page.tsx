import About from "./component/about";
import Contact from "./component/contact";
import Experience from "./component/experience";
import Intro from "./component/intro";
import Projects from "./component/projects";
import SectionDivider from "./component/section-divider";
import Skills from "./component/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
    </main>
  );
}
