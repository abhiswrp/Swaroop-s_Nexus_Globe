import React from 'react';
const Watermark = () => {
  return (
    <div style={styles.watermark}>
      <a
        href="https://www.linkedin.com/in/abhishek-swaroop-40a7a2224/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        Developed by Abhishek Swaroop
      </a>
    </div>
  );
};
const styles = {
  watermark: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '12px',
    fontStyle: 'italic',
    zIndex: 1000,
  },
  link: {
    color: 'rgba(255, 255, 255, 0.5)',
    textDecoration: 'none',
  },
};
export default Watermark;