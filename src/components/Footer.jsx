import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.brand}>
          <h3 style={styles.logo}>
            bruh.<span style={{ color: '#e31b1b' }}>vision</span>
          </h3>
          <p style={styles.tagline}>Break Rules Until Hype</p>
        </div>

        <div style={styles.social}>
          <a href="https://instagram.com/bruh.vision" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <FaInstagram size={20} />
          </a>
          <a href="mailto:krishnasuman@myyahoo.com" style={styles.socialLink}>
            <FaEnvelope size={20} />
          </a>
        </div>

        <p style={styles.copyright}>
          © {new Date().getFullYear()} bruh.vision — All rights reserved
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#020202',
    padding: 'clamp(40px, 8vw, 50px) clamp(16px, 5%, 5%) clamp(30px, 6vw, 30px)',
    borderTop: '1px solid rgba(227, 27, 27, 0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  brand: { marginBottom: '20px' },
  logo: { fontSize: 'clamp(1.5rem, 5vw, 1.8rem)', fontWeight: 700, marginBottom: '5px' },
  tagline: { fontSize: 'clamp(0.6rem, 2.5vw, 0.7rem)', letterSpacing: '2px', color: '#e31b1b' },
  social: { display: 'flex', justifyContent: 'center', gap: 'clamp(20px, 6vw, 30px)', marginBottom: '30px' },
  socialLink: { color: '#888', transition: 'color 0.3s', fontSize: 'clamp(18px, 4vw, 20px)' },
  copyright: { fontSize: 'clamp(0.7rem, 2.5vw, 0.8rem)', color: '#555' },
};

export default Footer;