import { motion, AnimatePresence } from 'motion/react';
import { HamburgerMenu } from './HamburgerMenu';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ href: string; label: string }>;
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      onClose(); // Close menu after navigation
    }
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href.substring(1));
    } else {
      window.location.href = href;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Close button - positioned to match hamburger button */}
          <div className="fixed top-0 left-0 right-0 z-50 px-6 py-3">
            <div className="max-w-7xl mx-auto flex justify-end">
              <motion.button
                className="text-foreground p-2"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close menu"
              >
                <HamburgerMenu isMobileMenuOpen={isOpen} />
              </motion.button>
            </div>
          </div>

          {/* Menu content */}
          <div className="flex items-center justify-center h-full px-6">
            <motion.nav
              className="text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="space-y-8">
                {links.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ 
                      duration: 0.2, 
                      delay: index * 0.05 
                    }}
                  >
                    <motion.button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-2xl text-primary hover:text-accent transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
