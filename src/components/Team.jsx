import React from 'react';
import { FaRegUser } from "react-icons/fa";

const teamMembers = [
  {
    name: 'Ganesh Manjeshwara P',
    role: 'Chartered Accountant & Company Secretary',
    bio: 'Ganesh is a highly accomplished Chartered Accountant from ICAI and Company Secretary from ICSI, known for delivering exceptional results in finance, accounting, and business advisory. With a Bachelor’s in Business Management and a Law degree, Ganesh has over 20 years of experience, including roles as International Finance Manager and leadership positions at Religare and Boston Financials.'
  },
  {
    name: 'Krishna Padakannaya',
    role: 'Finance and Management Professional',
    bio: 'Krishna is a seasoned finance and management professional with strong expertise in outsourcing, financial due diligence, and M&A. A member of ICAI, with a Bachelor’s in Business Management and a Law degree, Krishna has led finance operations across APAC, US, and EMEA regions, holding senior roles at Price Waterhouse, Emmvee, MetricStream, and Concentrix.'
  },
  {
    name: 'April Van Horn',
    role: 'Financial Professional',
    bio: 'April is a results-driven accounting professional with expertise in cash flow forecasting and complex reconciliations. She oversees accounts receivable/payable and interdepartmental coordination. With experience in implementing new software and enhancing internal controls, April has held positions at MON-YOUGH Community Services, Management Science Associates, and CP Industries.'
  },
  {
    name: 'Kawsal G',
    role: 'Corporate Compliance Specialist',
    bio: 'Kawsal is an associate member of ICSI with a Bachelor’s in Accounting. He has a strong background in corporate compliance and governance in the US and India, specializing in company incorporations, legal document drafting, and statutory compliance. Previously, he held positions at Ullas Kumar Associates and Boston Financials.'
  }
];

const Team = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Team</h2>
      <p style={styles.subtitle}>
        Meet the professionals who are dedicated to managing your finances with excellence.
      </p>
      <div style={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.imageContainer}>
              <FaRegUser style={styles.icon} />
            </div>
            <h3 style={styles.name}>{member.name}</h3>
            <p style={styles.role}>{member.role}</p>
            <p style={styles.bio}>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#424242',
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '36px',
    color: '#ffeb3b',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#e0e0e0',
    marginBottom: '30px',
  },
  teamGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    width: '250px',
    padding: '20px',
    backgroundColor: '#333333',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    transition: 'transform 0.3s',
    cursor: 'pointer',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '200px',
    backgroundColor: '#555',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  icon: {
    fontSize: '80px',
    color: '#ffeb3b',
  },
  name: {
    fontSize: '20px',
    color: '#ffffff',
    margin: '10px 0 5px',
  },
  role: {
    fontSize: '16px',
    color: '#ffeb3b',
    marginBottom: '10px',
  },
  bio: {
    fontSize: '14px',
    color: '#b0bec5',
    lineHeight: '1.5',
  },
};

export default Team;
