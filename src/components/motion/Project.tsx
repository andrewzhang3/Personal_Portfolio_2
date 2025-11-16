import { motion } from 'motion/react';
import LinkPreview from './LinkPreview';
import { FaExternalLinkAlt } from 'react-icons/fa';

export interface Project {
  title: string,
  description: string,
  technologies: string[],
  demo?: string,
  image?: string,
};

interface ProjectProps {
  project: Project,
  index: number
};

export function Project({ project, index } : ProjectProps) {

  const hasDemo = !!project.demo;
  return (
    <motion.div
      key={index}
      className="bg-background p-8 rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        rotateX: 2,
        rotateY: 2,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <h3 className="text-2xl text-primary mb-3">
        {project.title}
      </h3>
      
      <p className="text-secondary mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, i) => (
          <motion.span
            key={i}
            className="bg-card text-primary px-3 py-1 rounded-md text-sm border border-border"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {hasDemo && (
        <section className="flex gap-4 relative">
          <LinkPreview project={project}>
            <FaExternalLinkAlt className="w-4 h-4" />
          </LinkPreview>
        </section>
      )}
    </motion.div>
  )
}