import './index.css';

import { Analytics } from '@vercel/analytics/react';

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
      <Analytics />
    </div>
  )
}

export default App
