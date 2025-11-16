import { motion } from 'motion/react';

interface Experience {
  company: string,
  role: string,
  period: string,
  description: string,
  technologies: string[]
}

interface ExperienceProps {
  exp: Experience,
  index: number
}

export function Experience({ exp, index } : ExperienceProps) {
  return (
    <motion.section
      className="bg-card p-8 rounded-lg shadow-sm"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ 
        y: -4,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-2xl text-primary mb-1">
            {exp.role}
          </h3>
          <p className="text-xl text-accent">{exp.company}</p>
        </div>
        <p className="text-secondary mt-2 md:mt-0">{exp.period}</p>
      </div>

      <p className="text-secondary mb-4 leading-relaxed">
        {exp.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech, i) => (
          <motion.span
            key={i}
            className="bg-background text-primary px-3 py-1 rounded-md text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.section>
  )
}