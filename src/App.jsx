import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Tech from "./components/Tech.jsx";
import Experience from "./components/Experience.jsx";
import Feedbacks from "./components/Feedbacks.jsx";
import Work from "./components/Works.jsx";
import Contact from "./components/Contact.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="relative w-full bg-primary flex flex-col justify-center items-center gap-[3rem]">
      <header className="bg-hero-pattern w-full bg-cover bg-no-repeat bg-center">
        <Navbar />
      </header>
      <Hero />
      <About />
      {/* <Experience /> */}
      <Tech />
      <Work />
      <Contact />
      {/* <StarsCanvas/> */}
      <Routes>
        <Route path="/about" Component={<About/>} />
        <Route path="/contact" Component={<Contact/>} />
        <Route path="/work" Component={<Work/>} />
      </Routes>
    </div>
  );
}

export default App;
