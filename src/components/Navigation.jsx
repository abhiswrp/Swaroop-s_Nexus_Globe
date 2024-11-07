import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.rightTitle}>
        Nexus Globe
      </div>
      <div style={styles.leftLinks}>
        <Link style={styles.link} to="/">Home</Link> | 
        <Link style={styles.link} to="/about">About Us</Link> | 
        <Link style={styles.link} to="/team">Team</Link> | 
        <Link style={styles.link} to="/services">Services</Link> | 
        <Link style={styles.link} to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: '10px 20px',
  },
  leftLinks: {
    display: 'flex',
    gap: '10px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  linkHover: {
    color: '#FFD700',
  },
  rightTitle: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: '1.5em',
    fontFamily: 'sans-serif', 
    letterSpacing: '1px',
  },  
};
export default Navigation;