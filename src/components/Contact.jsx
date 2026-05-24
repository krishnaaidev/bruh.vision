import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

const FORMSPREE_ID = 'mredaqol';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <section id="contact" style={styles.section}>
        <div style={styles.successContainer}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <FaCheckCircle size={80} color="#e31b1b" />
          </motion.div>
          <h2 style={styles.successTitle}>Message Sent!</h2>
          <p style={styles.successText}>Thanks for reaching out. I'll get back to you within 24 hours.</p>
          <button onClick={() => window.location.reload()} style={styles.successBtn}>
            Send Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" style={styles.section}>
      <div ref={ref} style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={styles.header}
        >
          <span style={styles.badge}>Get in Touch</span>
          <h2 style={styles.title}>
            Let's create <span className="gradient-text">hype</span> together
          </h2>
          <p style={styles.subtitle}>
            Ready to break some rules? Drop me a message and let's bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={styles.content}
        >
          <div style={styles.info}>
            <div style={styles.infoCard}>
              <FaInstagram size={24} color="#e31b1b" />
              <h4>Instagram</h4>
              <a href="https://instagram.com/bruh.vision" target="_blank" rel="noopener noreferrer" style={styles.infoLink}>
                @bruh.vision
              </a>
            </div>
            <div style={styles.infoCard}>
              <FaEnvelope size={24} color="#e31b1b" />
              <h4>Email</h4>
              <a href="mailto:krishnasuman@myyahoo.com" style={styles.infoLink}>
                krishnasuman@myyahoo.com
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={styles.input}
                disabled={state.submitting}
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} style={styles.error} />
            </div>

            <div style={styles.inputGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={styles.input}
                disabled={state.submitting}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} style={styles.error} />
            </div>

            <div style={styles.inputGroup}>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="6"
                required
                style={styles.textarea}
                disabled={state.submitting}
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} style={styles.error} />
            </div>

            <motion.button
              type="submit"
              disabled={state.submitting}
              style={styles.button}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {state.submitting ? 'Sending...' : 'Send Message →'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: { background: '#050505', padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5%, 5%)' },
  container: { maxWidth: '1200px', margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 60px)' },
  badge: {
    fontSize: 'clamp(0.7rem, 3vw, 0.8rem)',
    letterSpacing: '3px',
    color: '#e31b1b',
    textTransform: 'uppercase',
  },
  title: { fontSize: 'clamp(1.8rem, 6vw, 3rem)', fontWeight: 700, marginTop: '10px' },
  subtitle: { color: '#aaa', maxWidth: '600px', margin: '20px auto 0', fontSize: 'clamp(0.85rem, 3vw, 1rem)' },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'clamp(30px, 6vw, 50px)',
  },
  info: { display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 4vw, 30px)' },
  infoCard: {
    background: '#0a0a0a',
    padding: 'clamp(20px, 5vw, 30px)',
    borderRadius: '20px',
    border: '1px solid rgba(227, 27, 27, 0.1)',
    textAlign: 'center',
  },
  infoLink: { color: '#e31b1b', textDecoration: 'none', fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', wordBreak: 'break-all' },
  form: { display: 'flex', flexDirection: 'column', gap: '20px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '5px' },
  input: {
    width: '100%',
    padding: 'clamp(14px, 3vw, 16px)',
    background: '#0a0a0a',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: '#fff',
    fontSize: 'clamp(0.85rem, 3vw, 1rem)',
    transition: 'all 0.3s',
  },
  textarea: {
    width: '100%',
    padding: 'clamp(14px, 3vw, 16px)',
    background: '#0a0a0a',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: '#fff',
    fontSize: 'clamp(0.85rem, 3vw, 1rem)',
    resize: 'vertical',
    fontFamily: 'inherit',
  },
  button: {
    background: '#e31b1b',
    color: '#fff',
    padding: 'clamp(14px, 3vw, 16px)',
    border: 'none',
    borderRadius: '40px',
    fontSize: 'clamp(0.9rem, 3vw, 1rem)',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  error: { color: '#e31b1b', fontSize: 'clamp(0.7rem, 2.5vw, 0.8rem)' },
  successContainer: {
    maxWidth: '500px',
    margin: '0 auto',
    textAlign: 'center',
    padding: 'clamp(40px, 10vw, 60px) clamp(20px, 5vw, 30px)',
    background: '#0a0a0a',
    borderRadius: '20px',
    border: '1px solid rgba(227, 27, 27, 0.2)',
  },
  successTitle: { fontSize: 'clamp(1.5rem, 6vw, 2rem)', marginTop: '20px', color: '#fff' },
  successText: { color: '#aaa', marginTop: '10px', marginBottom: '30px', fontSize: 'clamp(0.85rem, 3vw, 1rem)' },
  successBtn: {
    background: 'transparent',
    color: '#e31b1b',
    padding: '12px 30px',
    border: '2px solid #e31b1b',
    borderRadius: '40px',
    fontSize: 'clamp(0.85rem, 3vw, 1rem)',
    fontWeight: 600,
    cursor: 'pointer',
  },
};

export default Contact;