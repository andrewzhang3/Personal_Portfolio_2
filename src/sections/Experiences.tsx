import { motion } from 'motion/react';
import { Experience } from '../components/motion/Experience';

const experiences = [
  {
    company: 'Locumly Pty Ltd',
    role: 'Full Stack Developer',
    period: '2022 - Present',
    description:
    'Led full-stack development across multiple startup products under Locumly Pty Ltd, including Locumly, WorkRex, and RexLocal. Involved in the complete lifecycle from architecture and backend APIs to frontend implementation, integrations, and deployment. Collaborated closely with the founding team to iterate rapidly and align technical delivery with business goals.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'AWS']
  },
  {
    company: 'National Australia Bank (NAB)',
    role: 'Salesforce Developer',
    period: '2020 - Present',
    description:
      'Developed and maintained Salesforce solutions to support enterprise workflows and client relationship management. Collaborated with product and engineering teams to automate processes, optimize system performance, and enhance reliability across internal systems.',
    technologies: ['Salesforce', 'Apex', 'LWC', 'JavaScript', 'REST APIs', 'SOQL']
  }
];

export function Experiences() {
  return (
    <section id="experience" className="min-h-screen px-6 py-24">
      <section className="max-w-4xl mx-auto">
        <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-serif text-primary mb-4">Experience</h2>
            <motion.section
              className="w-20 h-1 bg-accent"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.section>

          <section className="space-y-12">
            {experiences.map((exp, index) => <Experience key={index} exp={exp} index={index} />)}
          </section>
      </section>
    </section>
  )
}