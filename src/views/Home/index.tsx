import Hero from "./Hero";
import Award from "./Award";
import About from "./About";
import Meem from "./Meem";
import Residental from "./Residental";
import Tailored from "./Tailored";
import Work from "./Work";
import Career from "./Career";
import Services from "./Services";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Stats from "./Stats";
import Contact from "./Contact";
import Collab from "./Collab";

function Index() {
  return (
    <div>
      <Hero />
      <Award />
      <About />
      <Meem />
      <Residental />
      <Tailored />
      {/* <Work /> */}
      <Career />
      <Services />
      {/* <Projects /> */}
      {/* <Testimonials /> */}
      <Stats />
      <Contact />
      <Collab />
    </div>
  );
}

export default Index;
