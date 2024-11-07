import React from 'react';

const Services = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Services</h2>
      <div style={styles.divider} />      
      <div style={styles.listRow}>
        <div style={styles.listItem}>
          <h3 style={styles.serviceName}>Accounting and Taxation Processing</h3>
          <p style={styles.description}>
            NexusGlobe provides expert offshore solutions to handle all your accounting and financial needs as a Virtual Accountant. We specialize in working with small and medium businesses worldwide, offering services such as bookkeeping, managing receivables and payables, and reconciliations. Our industry-best practices ensure smooth and hassle-free financial transactions.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.serviceName}>Tax & Regulatory Compliance</h3>
          <p style={styles.description}>
            NexusGlobe helps you meet your business tax compliance and advisory needs. Our corporate tax experts use their diverse experience and knowledge to offer seamless services for planning, financial accounting, and tax compliance.
          </p>
        </div>
      </div>

      <div style={styles.listRow}>
        <div style={styles.listItem}>
          <h3 style={styles.serviceName}>Consulting and Advisory</h3>
          <p style={styles.description}>
            At NexusGlobe, we understand that small and medium enterprises (SMEs) often lack access to quality advisory and consulting experts. This gap becomes evident when these companies aim to grow and improve their efficiency and profitability. We bridge this gap by providing expert counselors and strategists to assist with planning, budgeting, and strategy development.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.serviceName}>Back Office Solutions</h3>
          <p style={styles.description}>
            NexusGlobe offers comprehensive Backoffice Support to streamline CPA’s and other professional firms' accounting and financial operations. Our services are designed to assist in managing their workload efficiently and effectively, including bookkeeping, financial reporting, tax preparation, account management, payroll processing, and audit support.
          </p>
        </div>
      </div>
      <p style={styles.footerText}>
        Our team of skilled professionals ensures that your back-office operations run smoothly, allowing you to focus on your core business activities.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#424242',
    color: '#ffffff',
    padding: '20px',
  },
  title: {
    fontSize: '32px',
    color: '#ffeb3b',
    marginBottom: '10px',
  },
  divider: {
    width: '80%',
    height: '2px',
    backgroundColor: '#ffeb3b',
    margin: '20px 0',
  },
  listRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  listItem: {
    fontSize: '18px',
    color: '#ffffff',
    padding: '20px',
    backgroundColor: '#333333',
    borderRadius: '30px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    width: '450px',
    height: '200px',
    transition: 'transform 0.2s',
  },
  serviceName: {
    margin: 0,
    fontSize: '20px',
    color: '#ffeb3b',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    color: '#ffffff',
    lineHeight: '1.5',
  },
  footerText: {
    marginTop: '30px',
    fontSize: '16px',
    color: '#b0bec5',
    width: '80%',
    textAlign: 'center',
  },
};

export default Services;
