import { Toaster } from "react-hot-toast"
import About from "./components/About"
import ContactMe from "./components/ContactMe"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import MySkills from "./components/MySkills"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Testimonial from "./components/Testimonial"
import Thanks from "./components/Thanks"

function App() {

  return (
    <>
      <Toaster />
      <Navbar />
      <Hero />
      <About />
      <MySkills />
      <Projects />
      <Experience />
      <Testimonial />
      <ContactMe />
      <Thanks />
    </>
  )
}

export default App
