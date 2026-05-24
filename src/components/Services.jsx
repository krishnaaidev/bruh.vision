import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { FaCamera, FaVideo, FaFilm } from 'react-icons/fa';

const services = [
  {
    icon: <FaCamera size={40} />,
    title: 'Photography',
    description: 'High-impact editorial, commercial, and conceptual photography.',
  },
  {
    icon: <FaVideo size={40} />,
    title: 'Videography',
    description: 'Dynamic video production for brands, music, and storytelling.',
  },
  {
    icon: <FaFilm size={40} />,
    title: 'Cinematography',
    description: 'Cinematic visuals with industry-grade cameras and lighting.',
  },
];

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" style={{ background: '#050505', padding: '80px 5%' }}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={styles.header}
        >
          <span style={styles.badge}>What I Do</span>
          <h2 style={styles.title}>
            Services that <span className="gradient-text">break rules</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={styles.grid}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              style={styles.card}
            >
              <div style={styles.iconWrapper}>
                <div style={styles.icon}>{service.icon}</div>
              </div>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardDesc}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  container: { maxWidth: '1200px', margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 60px)' },
  badge: {
    fontSize: 'clamp(0.7rem, 3vw, 0.8rem)',
    letterSpacing: '3px',
    color: '#e31b1b',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 'clamp(1.8rem, 6vw, 3rem)',
    fontWeight: 700,
    marginTop: '10px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'clamp(20px, 4vw, 30px)',
  },
  card: {
    background: '#0a0a0a',
    padding: 'clamp(30px, 5vw, 40px) clamp(20px, 4vw, 30px)',
    borderRadius: '20px',
    border: '1px solid rgba(227, 27, 27, 0.1)',
    textAlign: 'center',
    transition: 'all 0.3s',
  },
  iconWrapper: {
    width: 'clamp(60px, 12vw, 80px)',
    height: 'clamp(60px, 12vw, 80px)',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #e31b1b20, #000)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 25px',
  },
  icon: { color: '#e31b1b', fontSize: 'clamp(30px, 6vw, 40px)' },
  cardTitle: { fontSize: 'clamp(1.3rem, 4vw, 1.5rem)', marginBottom: '15px', fontWeight: 600 },
  cardDesc: { color: '#aaa', lineHeight: '1.6', fontSize: 'clamp(0.85rem, 3vw, 1rem)' },
};

export default Services;