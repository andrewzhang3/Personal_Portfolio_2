import './index.css';
import { Navbar } from './components/layout/Navbar';
import { About } from './sections/About';
import { Experiences } from './sections/Experiences';
import { FloatingShapes } from './components/motion/FloatingShapes';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {

  return (
    <div className="min-h-screen text-slate-900 bg-background">
      <FloatingShapes />
      <Navbar />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
