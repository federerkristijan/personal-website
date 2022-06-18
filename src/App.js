import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/Intro";
import './App.css'
import CV from "./components/CV/CV";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <CV />
      <About />
    </div>
  );
}

export default App;
