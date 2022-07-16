import { themeContext } from "./Context"
import { useContext } from "react"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import Intro from "./pages/Intro/Intro"
import About from "./pages/About/About"
import Portfolio from "./pages/Portfolio/Portfolio"
import Contact from "./pages/Contact/Contact"

import './App.css'


function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style={{background: darkMode ? 'black' : '', color: darkMode ? 'white' : ''}}>
      <Navbar />
      <Intro />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
