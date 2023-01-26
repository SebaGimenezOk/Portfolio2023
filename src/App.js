import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import SocialLinks from "./components/SocialLinks";
import Experience2 from "./components/Experience2";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SobreMi />
      <Experience />
      <Experience2 />
      <Proyectos />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
