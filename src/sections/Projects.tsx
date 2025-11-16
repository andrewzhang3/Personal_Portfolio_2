import { motion } from 'motion/react';
import { Project } from '../components/motion/Project';

const projects = [
  {
    title: 'Locumly',
    description:
      'A live marketplace connecting optometrists and clinics across Australia. Features include real-time messaging, job listings, and Twilio-powered SMS notifications.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Twilio', 'Stripe'],
    demo: 'https://locumly.com.au/',
    image: "/src/assets/locumly.png"
  },
  {
    title: 'WorkRex',
    description:
      'CRM and broadcast marketing tool built for SMB\'s to manage SMS and WhatsApp campaigns. Integrated Twilio, WATI, and BIRD APIs for automated multi-channel communication.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'BIRD API', 'WATI', 'Twilio']
  },
  {
    title: 'RexLocal',
    description:
      'Lead generation and customer re-engagement platform with AI-assisted message fine-tuning, Flatfile API integration for data uploads, and BIRD API for multi-channel messaging.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Flatfile API', 'BIRD API']
  },
  {
    title: 'COVID-19 Tracker (Monash University)',
    description:
      'Collaborated with Monash University’s Faculty of Science to build a public COVID-19 tracking dashboard for research and public awareness, focusing on data visualization and responsive UI.',
    technologies: ['React', 'JavaScript', 'echarts', 'REST APIs'],
    demo: 'https://covid-19-au.com/about-us',
    image: "/src/assets/covid-19-au.png"
  }
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-24 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-serif text-primary mb-4">Projects</h2>
          <motion.div
            className="w-20 h-1 bg-accent"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
      </div>

      <section className="grid max-w-6xl mx-auto md:grid-cols-2 gap-8">
        {projects.map((project, index) => <Project key={index} project={project} index={index} />)}
      </section>
    </section>
  )
}