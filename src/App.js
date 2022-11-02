import { themeContext } from "./Context"
import { useContext, useEffect } from "react"
import ReactGA from 'react-ga';

import NavbarMenu from "./components/Navbar/NavbarMenu"
import Footer from "./components/Footer/Footer"

import Intro from "./pages/Intro/Intro"
import About from "./pages/About/About"
import Portfolio from "./pages/Portfolio/Portfolio"
import Contact from "./pages/Contact/Contact"

import './App.css'
import Skills from "./pages/Skills/Skills"

ReactGA.initialize(process.env.REACT_APP_GA_MEASURMENT_ID);

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <div className="App"
    style={{background: darkMode ? 'var(--black)' : '', color: darkMode ? 'white' : ''}}>
      <NavbarMenu />
      <Intro />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
