import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { FiX } from 'react-icons/fi';

const projects = [
  { id: 1, title: 'Neon Dreams', category: 'Cinematography', img: 'https://placehold.co/800x1000/1a1a1a/e31b1b?text=Project+1' },
  { id: 2, title: 'Urban Decay', category: 'Photography', img: 'https://placehold.co/800x800/1a1a1a/e31b1b?text=Project+2' },
  { id: 3, title: 'Silent Echo', category: 'Videography', img: 'https://placehold.co/800x1200/1a1a1a/e31b1b?text=Project+3' },
  { id: 4, title: 'Midnight Run', category: 'Cinematography', img: 'https://placehold.co/800x900/1a1a1a/e31b1b?text=Project+4' },
  { id: 5, title: 'Fragments', category: 'Photography', img: 'https://placehold.co/800x1100/1a1a1a/e31b1b?text=Project+5' },
  { id: 6, title: 'Velocity', category: 'Videography', img: 'https://placehold.co/800x700/1a1a1a/e31b1b?text=Project+6' },
];

const Gallery = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selected, setSelected] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="gallery" style={{ padding: '80px 5%', background: '#050505' }}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={styles.header}
        >
          <span style={styles.badge}>Portfolio</span>
          <h2 style={styles.title}>
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={styles.grid}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              style={styles.card}
              onClick={() => setSelected(project)}
            >
              <img src={project.img} alt={project.title} style={styles.image} />
              <div style={styles.overlay}>
                <p style={styles.category}>{project.category}</p>
                <h3 style={styles.projectTitle}>{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={styles.modal}
          onClick={() => setSelected(null)}
        >
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setSelected(null)}>
              <FiX size={28} />
            </button>
            <img src={selected.img} alt={selected.title} style={styles.modalImage} />
            <h3 style={styles.modalTitle}>{selected.title}</h3>
            <p style={styles.modalCategory}>{selected.category}</p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

const styles = {
  container: { maxWidth: '1400px', margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 60px)' },
  badge: {
    fontSize: 'clamp(0.7rem, 3vw, 0.8rem)',
    letterSpacing: '3px',
    color: '#e31b1b',
    textTransform: 'uppercase',
  },
  title: { fontSize: 'clamp(1.8rem, 6vw, 3rem)', fontWeight: 700, marginTop: '10px' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: 'clamp(16px, 3vw, 20px)',
  },
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    borderRadius: '12px',
    aspectRatio: '4/5',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 'clamp(20px, 5vw, 30px) clamp(15px, 4vw, 20px) 15px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
    transform: 'translateY(100%)',
    transition: 'transform 0.3s',
  },
  category: { fontSize: 'clamp(0.7rem, 3vw, 0.75rem)', color: '#e31b1b', marginBottom: '5px' },
  projectTitle: { fontSize: 'clamp(1rem, 4vw, 1.2rem)', fontWeight: 600, color: '#fff' },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.95)',
    zIndex: 2000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  modalContent: {
    position: 'relative',
    maxWidth: '90vw',
    maxHeight: '90vh',
  },
  closeBtn: {
    position: 'absolute',
    top: '-40px',
    right: 0,
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontSize: 'clamp(20px, 5vw, 28px)',
  },
  modalImage: { maxWidth: '100%', maxHeight: '70vh', borderRadius: '12px' },
  modalTitle: { color: '#fff', marginTop: '20px', fontSize: 'clamp(1.2rem, 5vw, 1.5rem)' },
  modalCategory: { color: '#e31b1b', marginTop: '5px' },
};

// Add hover styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @media (max-width: 768px) {
    .card:hover img { transform: none; }
    .card:hover .overlay { transform: translateY(0); }
  }
  @media (min-width: 769px) {
    .card:hover img { transform: scale(1.05); }
    .card:hover .overlay { transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);

export default Gallery;