import { motion } from 'motion/react'

interface HamburgerMenuProps {
  isMobileMenuOpen: boolean
}

export function HamburgerMenu({ isMobileMenuOpen } : HamburgerMenuProps) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <motion.path
        d="M3 12h18"
        animate={{
          y: isMobileMenuOpen ? 0 : 0,
          rotate: isMobileMenuOpen ? 45 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.path
        d="M3 6h18"
        animate={{
          opacity: isMobileMenuOpen ? 0 : 1,
          y: isMobileMenuOpen ? 0 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.path
        d="M3 18h18"
        animate={{
          y: isMobileMenuOpen ? -6 : 0,
          rotate: isMobileMenuOpen ? -45 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.svg>
  )
}