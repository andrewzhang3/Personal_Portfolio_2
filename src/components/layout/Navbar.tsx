import { useEffect, useState } from 'react';
import logo from '../../assets/andrew_logo_6_transparent.png';
import { motion } from "motion/react";
import { HamburgerMenu } from '../motion/HamburgerMenu';
import { MobileMenu } from '../motion/MobileMenu';

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Store the current scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      // Apply overflow hidden and compensate for scrollbar
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "unset";
    };
  }, [isMobileMenuOpen]);

  // Force immediate state change for responsive button
  const handleMenuToggle = () => {
    if (isMobileMenuOpen) {
      // Force immediate close
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-3 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}>
      <section className='max-w-7xl mx-auto flex items-center justify-between'>
        <a
          href="#about"
          className="text-2xl font-serif text-accent"
        >
          <motion.img
            src={logo} alt="Andrew Zhang"
            className="h-7 w-7 rounded-md"
            whileHover={{ rotate: -15 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </a>
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <motion.a
                className="relative text-foreground"
                href={link.href}
                whileHover="hover"
                initial="initial"
              >
                {link.label}
                <motion.span
                  className="absolute left-0 bottom-[-4px] h-[2px] bg-accent"
                  variants={{
                    initial: { width: 0 },
                    hover: { width: "100%" },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </li>
          ))}
        </ul>
        {/* Mobile Hamburger Button */}
        <motion.button
          onClick={handleMenuToggle}
          className="md:hidden text-foreground p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <HamburgerMenu isMobileMenuOpen={isMobileMenuOpen} />
        </motion.button>
      </section>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={handleMenuToggle}
        links={links}
      />
    </nav>
  )
}