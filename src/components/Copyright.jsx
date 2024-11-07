import React from 'react';
const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div style={styles.copyright}>
            © {currentYear} Nexus Globe. All rights reserved.
        </div>
    );
};

const styles = {
    copyright: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#333',
        color: '#fff',
        fontSize: '14px',
        position: 'relative',
        bottom: '0',
        width: '97.35%',
    },
};
export default Copyright;