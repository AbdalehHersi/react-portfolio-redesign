import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App
