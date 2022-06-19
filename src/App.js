import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/Intro";
import './App.css'
import CV from "./components/CV/CV";
// import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <CV />
      {/* <About /> */}
      <Portfolio />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
