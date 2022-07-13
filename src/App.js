import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/Intro"
import './App.css'
// import CV from "./components/CV/CV"
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import { themeContext } from "./Context"
import { useContext } from "react"

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
      {/* <CV /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
