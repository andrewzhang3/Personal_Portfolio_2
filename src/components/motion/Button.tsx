import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  sectionId?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ children, className = '', sectionId, onClick, type = 'button' }: ButtonProps) {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && sectionId) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (sectionId) {
      scrollToSection(sectionId);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.button
      type={type}
      onClick={handleClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}