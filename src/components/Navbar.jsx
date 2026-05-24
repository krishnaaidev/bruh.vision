import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        ...styles.nav,
        background: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'rgba(5, 5, 5, 0.8)',
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(5px)',
        borderBottom: scrolled ? '1px solid rgba(227, 27, 27, 0.2)' : 'none',
      }}
    >
      <div style={styles.container}>
        <a href="#hero" style={styles.logo}>
          <span style={styles.bruh}>bruh.</span>
          <span style={styles.vision}>vision</span>
        </a>

        <div style={styles.desktopMenu}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={styles.navLink}>
              {link.name}
            </a>
          ))}
        </div>

        <div style={styles.mobileIcon} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={styles.mobileMenu}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={styles.mobileLink}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 5%',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  logo: {
    fontSize: 'clamp(1.4rem, 5vw, 1.8rem)',
    fontWeight: 800,
    textDecoration: 'none',
  },
  bruh: { color: '#fff' },
  vision: { color: '#e31b1b' },
  desktopMenu: {
    display: 'flex',
    gap: 'clamp(20px, 4vw, 40px)',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    position: 'relative',
    paddingBottom: '5px',
  },
  mobileIcon: {
    display: 'none',
    cursor: 'pointer',
  },
  mobileMenu: {
    overflow: 'hidden',
    background: '#0a0a0a',
    borderTop: '1px solid rgba(227, 27, 27, 0.2)',
  },
  mobileLink: {
    display: 'block',
    padding: '15px 5%',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    textAlign: 'center',
  },
};

// Add responsive styles via style tag
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @media (max-width: 768px) {
    .desktop-menu { display: none; }
    .mobile-icon { display: block; }
  }
`;
document.head.appendChild(styleSheet);

export default Navbar;