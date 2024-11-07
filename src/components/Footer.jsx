import React from 'react';
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <p>Contact: info@nexusglobe.com | Phone: (123) 456-7890</p>
        <p>
          Follow us on:
          <a href="https://facebook.com" style={styles.link}> Facebook</a>,
          <a href="https://twitter.com" style={styles.link}> Twitter</a>,
          <a href="https://linkedin.com" style={styles.link}> LinkedIn</a>
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  content: {
    margin: '0 auto',
    maxWidth: '1200px',
  },
  link: {
    color: '#ffeb3b',
    margin: '0 5px',
  },
};
export default Footer;