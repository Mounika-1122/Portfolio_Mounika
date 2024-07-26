import './App.css'
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Links from './components/Links';
import Copyright from './components/Copyright';



function App() {
 
  return (
   <div className="bg-black">
   <NavBar />
   <Home />
   <About />
   <Resume />
   <Skills />
   <Internship />
   <Contact />
   <Links />
   <Copyright />
  
   </div>
  )
}

export default App
