import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import SocialLinks from "./components/SocialLinks";
import Experience2 from "./components/Experience2";
import SocialLinksFooter from "./components/SocialLinksFooter";
import Experience3 from "./components/Experience3";
import ScrollToTopButton from "./components/TopButton";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SobreMi />
      <Experience />
      <Experience2 />
      <Experience3 />
      <Proyectos />
      <Contact />
      <SocialLinks />
      <SocialLinksFooter />
      <ScrollToTopButton/>
    </div>


  );
}

export default App;
