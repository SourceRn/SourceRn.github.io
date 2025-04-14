import NavBar from "./components/navBar/NavBar"
import About from "./layouts/About/About"
import Contact from "./layouts/Contact/Contact"
import Home from "./layouts/Home/Home"
import Services from "./layouts/ServicesLayout/Services"

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <Services />
      <About />
      <Contact />
    </>
  )
}

export default App
