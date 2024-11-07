import React, { useState } from 'react';
import logo from './Accounting_Solutions-Logo.jpg';
import { FaPhone, FaInfoCircle } from 'react-icons/fa';
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div style={styles.container}>
      <img
        src={logo}
        alt="Accounting Solutions"
        style={styles.image}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <h1 style={styles.heading}>Streamline Your Accounting and Tax Needs with Expert Outsourcing Solutions</h1>
      <p style={styles.subtitle}>
        Reliable Accounting, Bookkeeping, and Tax Preparation Services for Businesses in USA & India
      </p>
      <p style={styles.description}>
        Welcome to NexusGlobe, your trusted partner for outsourced accounting, bookkeeping, and tax preparation services. Whether you’re a small business, a growing startup, or an established company, our team of certified professionals is here to help you manage your finances efficiently and cost-effectively. With expertise in both US and India regulations, we provide tailored solutions that save you time, reduce costs, and ensure compliance with local tax laws.
      </p>
      <div style={styles.coreValuesContainer}>
        <div style={styles.valueBox}>
          <h2 style={styles.valueTitle}>Integrity & Transparency</h2>
          <p style={styles.valueDescription}>
            We prioritize honesty in everything we do, offering clear, reliable communication. Our strong data security measures keep client information safe and confidential.
          </p>
        </div>
        <div style={styles.valueBox}>
          <h2 style={styles.valueTitle}>Proactive Communication</h2>
          <p style={styles.valueDescription}>
            We focus on accountability and open communication to quickly resolve issues with integrity, building strong trust with our clients.
          </p>
        </div>
        <div style={styles.valueBox}>
          <h2 style={styles.valueTitle}>Partnership & Collaboration</h2>
          <p style={styles.valueDescription}>
            We foster an environment where ideas are openly shared and discussed, encouraging personal responsibility in building strong relationships with both clients and colleagues.
          </p>
        </div>
      </div>
      <div style={styles.buttonContainer}>
        <button
          style={isHovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => (window.location.href = '/contact')}
        >
          <FaPhone style={styles.icon} /> Get a Free Consultation Today
        </button>
        <button
          style={isHovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => (window.location.href = '/services')}
        >
          <FaInfoCircle style={styles.icon} /> Learn More About Our Services
        </button>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#2d2d2d',
    color: '#ffffff',
    textAlign: 'center',
  },
  image: {
    width: '70%',
    height: 'auto',
    maxHeight: '300px',
    objectFit: 'contain',
    borderRadius: '12px',
    marginBottom: '30px',
    boxShadow: '0 6px 14px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.3s',
  },
  heading: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#ffcc00',
    margin: '20px 0',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)',
  },
  subtitle: {
    fontSize: '20px',
    color: '#e0e0e0',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px',
    color: '#b0bec5',
    lineHeight: '1.7',
    marginBottom: '40px',
    backgroundColor: '#3a3a3a',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
  },
  coreValuesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginBottom: '40px',
    width: '100%',
    justifyContent: 'center',
  },
  valueBox: {
    backgroundColor: '#333333',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
  },
  valueTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#ffeb3b',
    marginBottom: '12px',
    textAlign: 'center',
  },
  valueDescription: {
    fontSize: '15px',
    color: '#e0e0e0',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30px',
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '14px 22px',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '12px',
    transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
    width: '270px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
  },
  icon: {
    marginRight: '10px',
  },
};
export default Home;