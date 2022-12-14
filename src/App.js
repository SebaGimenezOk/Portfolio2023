import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <SobreMi/>
      <Proyectos/>
      <SocialLinks/>
    </div>
  );
}

export default App;
