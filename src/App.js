import { themeContext } from "./Context";
import { useContext, useEffect } from "react";
//  credtis to https://github.com/react-ga/react-ga
import ReactGA from "react-ga";
// credits to https://github.com/Mastermindzh/react-cookie-consent
import CookieConsent from "react-cookie-consent";

import NavbarMenu from "./components/Navbar/NavbarMenu";
import Footer from "./components/Footer/Footer";

import Intro from "./pages/Intro/Intro";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

import "./App.css";
import Skills from "./pages/Skills/Skills";

ReactGA.initialize(process.env.REACT_APP_GA_MEASURMENT_ID);

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "var(--black)" : "",
        color: darkMode ? "white" : "",
        minWidth: "100%"
      }}
    >
      <CookieConsent
        enableDeclineButton
        onAccept={() => {
          localStorage.setItem('cookies_enambled', '1');
        }}
        onDecline={() => {
          localStorage.setItem('cookies_enabled', '0');
        }}
        setDeclineCookie={true}
        flipButtons={true}
        style={{ textAlign: "center", background: "grey" }}
        overlay={true}
        buttonStyle={{ borderRadius: "7px", background: "var(--blue)", color: "white" }}
        declineButtonStyle={{ borderRadius: "7px", background: "var(--purple)" }}
      >
        🍪 This site uses cookies. 🍪
      </CookieConsent>
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
