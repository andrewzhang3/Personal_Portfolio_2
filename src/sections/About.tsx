import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from "../components/motion/Button";

export function About() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    }
  };
  
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <section className="max-w-4xl w-full">
        <motion.section
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.section
              className="max-w-4xl w-full"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <p className="text-accent text-xl">Hello, I'm</p>
              <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-primary">
                Andrew Zhang
              </h1>
              <p>Software Developer</p>
            </motion.section>

            <motion.div
              className="w-16 h-16 bg-primary rounded-lg"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />

          <motion.p
            className="text-lg text-secondary max-w-2xl leading-relaxed"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            I'm a full-stack developer based in Melbourne with experience across Salesforce and the MERN stack.
            I've built and launched multiple products startup tools like Locumly and WorkRex. I focus on building reliable, user-friendly interfaces that solve real problems.
          </motion.p>

          <motion.div
            className="flex gap-4 pt-4"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            >
            <Button
              sectionId="contact"
              className="bg-accent text-accent-foreground px-4 md:px-8 py-2 md:py-3 rounded-lg"
            >
              Get In Touch
            </Button>
          </motion.div>
          <motion.section
          className="flex gap-4 pt-4"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.a
              href="https://github.com/andrewzhang3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
              whileHover={{ y: -4 }}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/andrewziyezhang/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
              whileHover={{ y: -4 }}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
          </motion.section>
        </motion.section>
      </section>
    </section>
  )
}