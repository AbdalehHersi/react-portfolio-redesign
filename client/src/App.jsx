import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './css/App.css'
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { data } from "./data/projectData";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="bodyContainer">
      <Routes>
        <Route path="/*" element={<Home />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/projects" element={
          data.map((data) => <Projects key={data.id} individual={data} />)
          }/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App
