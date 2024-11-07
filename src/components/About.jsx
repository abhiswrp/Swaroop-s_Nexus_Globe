import React from 'react';
const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>About Us</h2>
        <hr style={styles.divider} />
        <div style={styles.section}>
          <h3 style={styles.sectionHeading}>Mission Statement</h3>
          <p style={styles.description}>
            Our mission is to empower businesses by streamlining their accounting, bookkeeping, and tax processes with reliable and efficient services.
          </p>
          <h3 style={styles.sectionHeading}>Vision Statement</h3>
          <p style={styles.description}>
            We envision a future where businesses of all sizes can focus on growth and innovation, knowing their finances are handled with expertise.
          </p>
        </div>
        <hr style={styles.sectionDivider} />
        <div style={styles.section}>
          <h3 style={styles.sectionHeading}>Expertise</h3>
          <p style={styles.description}>
            With more than 100 years of team experience in serving clients across both the United States and India, our team understands the complexities of each country’s financial landscape. We specialize in cross-border compliance, offering personalized services that align with your unique needs—whether it’s managing day-to-day bookkeeping or preparing taxes under the U.S. IRS or India’s GST framework. Our services are designed to minimize errors, save you money, and provide transparent financial reporting.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(135deg, #424242, #212121)',
    padding: '20px',
  },
  card: {
    backgroundColor: '#333333',
    color: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
    maxWidth: '800px',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    color: '#ffeb3b',
    marginBottom: '10px',
  },
  sectionHeading: {
    fontSize: '24px',
    color: '#ffeb3b',
    marginTop: '20px',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  description: {
    fontSize: '18px',
    color: '#b0bec5',
    lineHeight: '1.6',
  },
  divider: {
    width: '60px',
    height: '3px',
    backgroundColor: '#ffeb3b',
    margin: '20px auto',
    border: 'none',
  },
  sectionDivider: {
    width: '80%',
    height: '2px',
    backgroundColor: '#ffeb3b',
    margin: '30px auto',
    border: 'none',
  },
  section: {
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    backgroundColor: '#424242',
  },
};

export default About;
