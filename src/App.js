import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";

export default function App() {
    return (
      <div>
          <Navbar/>
          <Hero/>
          <About/>
          <Tech/>
          <ProjectSection/>
          <Footer/>
      </div>
    )
}
