import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="hero"
      style={{
        ...styles.hero,
        background: 'radial-gradient(ellipse at 30% 40%, #1a0a0a 0%, #050505 100%)',
      }}
    >
      <div style={styles.overlay} />
      <div ref={ref} style={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={styles.badge}
          >
            Cinematography • Photography
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            style={styles.title}
          >
            Break Rules.
            <br />
            <span className="gradient-text" style={styles.highlight}>
              Until Hype.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            style={styles.subtitle}
          >
            Visual storytelling that breaks conventions and creates real impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            style={styles.buttons}
          >
            <a href="#gallery" style={styles.btnPrimary}>
              View Portfolio
            </a>
            <a href="#contact" style={styles.btnSecondary}>
              Start a Project
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={styles.scrollIndicator}
      >
        <span style={styles.scrollText}>SCROLL</span>
        <div style={styles.scrollLine} />
      </motion.div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 50%, rgba(227, 27, 27, 0.08) 0%, transparent 70%)',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '0 20px',
  },
  badge: {
    fontSize: 'clamp(0.7rem, 3vw, 0.85rem)',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: '#e31b1b',
    marginBottom: '20px',
  },
  title: {
    fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
    fontWeight: 800,
    lineHeight: '1.1',
    marginBottom: '24px',
  },
  highlight: {
    display: 'inline-block',
  },
  subtitle: {
    fontSize: 'clamp(0.9rem, 4vw, 1.1rem)',
    color: '#aaa',
    maxWidth: '600px',
    margin: '0 auto 40px',
    lineHeight: '1.6',
    padding: '0 10px',
  },
  buttons: {
    display: 'flex',
    gap: 'clamp(12px, 4vw, 20px)',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '0 16px',
  },
  btnPrimary: {
    background: '#e31b1b',
    color: '#fff',
    padding: 'clamp(12px, 3vw, 14px) clamp(24px, 5vw, 32px)',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontSize: 'clamp(0.9rem, 3vw, 1rem)',
    textAlign: 'center',
  },
  btnSecondary: {
    background: 'transparent',
    color: '#fff',
    padding: 'clamp(12px, 3vw, 14px) clamp(24px, 5vw, 32px)',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 600,
    border: '2px solid rgba(227, 27, 27, 0.5)',
    cursor: 'pointer',
    fontSize: 'clamp(0.9rem, 3vw, 1rem)',
    textAlign: 'center',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  scrollText: {
    fontSize: '0.7rem',
    letterSpacing: '2px',
    color: '#666',
  },
  scrollLine: {
    width: '1px',
    height: '40px',
    background: 'linear-gradient(180deg, #e31b1b, transparent)',
  },
};

export default Hero;