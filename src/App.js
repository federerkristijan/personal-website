import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/Intro";
import './App.css'
import CV from "./components/CV/CV";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <CV />
    </div>
  );
}

export default App;
