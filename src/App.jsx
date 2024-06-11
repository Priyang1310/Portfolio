import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
// import Tech from "./components/Tech.jsx"
import Experience from "./components/Experience.jsx"
import Feedbacks from "./components/Feedbacks.jsx"
import Work from "./components/Works.jsx"
import {StarsCanvas} from "./components"
import Contact from "./components/Contact.jsx"

function App() {

  return (
      <div className="relative bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        {/* <Tech/> */}
        <Work/>
        <Contact/>
        {/* <StarsCanvas/> */}
        <div className="relative z-0"></div>
      </div>
  )
}

export default App
