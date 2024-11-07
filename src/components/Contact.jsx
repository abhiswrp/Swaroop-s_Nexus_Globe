import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <div style={styles.contactSection}>
        <div style={styles.contactBlock}>
          <h2 style={styles.title}>Contact Us</h2>
          <form
            action="https://formspree.io/f/mbljgkny"
            method="POST"
            style={styles.form}
          >
            <input
              name="name"
              placeholder="Your Name"
              required
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={styles.input}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              style={styles.textarea}
            ></textarea>
            <button type="submit" style={styles.button}>Submit</button>
          </form>
        </div>
      </div>

      <div style={styles.locationsSection}>
        <div style={styles.locationsBlock}>
          <h3 style={styles.locationsTitle}>Locations</h3>
          <div style={styles.locations}>
            <div style={styles.locationRow}>
              {locations.slice(0, 2).map((location) => (
                <div key={location.id} style={styles.locationCard}>
                  <h4 style={styles.locationName}>{location.name}</h4>
                  <p style={styles.locationAddress}>{location.address}</p>
                  <p style={styles.phone}>Phone: {location.phone}</p>
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="200px"
                    style={styles.mapIframe}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              ))}
            </div>
            <div style={styles.locationRow}>
              {locations.slice(2).map((location) => (
                <div key={location.id} style={styles.locationCard}>
                  <h4 style={styles.locationName}>{location.name}</h4>
                  <p style={styles.locationAddress}>{location.address}</p>
                  <p style={styles.phone}>Phone: {location.phone}</p>
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="200px"
                    style={styles.mapIframe}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const locations = [
  {
    id: 1,
    name: "USA",
    address: "250 Cedar Ridge, Dr Apt 911, Monroeville, PA -15146, USA",
    phone: "+1 4123788698",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.125029563556!2d-79.92034968454779!3d40.41945977936314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834efb890e6fb4f%3A0x9d8c45aee5b098d4!2s250%20Cedar%20Ridge%2C%20Dr%20Apt%20911%2C%20Monroeville%2C%20PA%20-15146!5e0!3m2!1sen!2sus!4v1688409890262!5m2!1sen!2sus"
  },
  {
    id: 2,
    name: "Udupi, India",
    address: "# Skanda, Main Road, Korangaprady, Udupi – 574 118",
    phone: "+91 9611253535",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130616.15436607596!2d74.74704343193717!3d13.340227517367405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf9f6b8d06db77%3A0x2736d4b2b1692ac0!2sUdupi%20District%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1688410098479!5m2!1sen!2sus"
  },
  {
    id: 3,
    name: "Bangalore, India",
    address: "#180, 4th Floor, 16th Main, 36th Cross Rd, 4th T Block East, Pattabhirama Nagar, Jayanagar, Bengaluru - 560041, Karnataka, India",
    phone: "+91 9900244717",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95326.43903013779!2d77.55331959279652!3d12.97159979296088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1679b1e325f7%3A0x7b35f75c918f2a5a!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1688409971289!5m2!1sen!2sus"
  },
  {
    id: 4,
    name: "Nagpur, India",
    address: "Shop No 16A, First Floor Popular, Lal Imli Chowk, Wholesale Cloth Market, Gandhibagh, Nagpur, Maharashtra 440002",
    phone: "",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282748.0268492496!2d79.0894072728916!3d21.145800394408944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd34fd58728d049%3A0x69b60f8b946f1b1e!2sNagpur%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1688410161987!5m2!1sen!2sus"
  }
];

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#424242',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
  },
  contactSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginLeft:'35px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
    marginRight: '20px',
    marginTop: '-20px',
  },
  contactBlock: {
    backgroundColor: '#333',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    marginBottom: '30px',
    width: '100%',
    maxWidth: '500px',
  },
  title: {
    fontSize: '32px',
    color: '#ffeb3b',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    margin: '20px auto',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#333333',
    color: '#ffffff',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#333333',
    color: '#ffffff',
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#ffeb3b',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    color: '#000',
    cursor: 'pointer',
    fontSize: '16px',
  },
  locationsSection: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
    marginLeft: '20px',
    marginTop: '20px',
  },
  locationsBlock: {
    backgroundColor: '#333',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    width: '100%',
    maxWidth: '800px',
    marginBottom: '40px',
  },
  locationsTitle: {
    fontSize: '24px',
    color: '#ffeb3b',
    marginBottom: '20px',
  },
  locations: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  locationRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '30px',
  },
  locationCard: {
    backgroundColor: '#444',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '45%',
    minWidth: '250px',
    margin: '0 10px',
  },
  locationName: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#ffeb3b',
  },
  locationAddress: {
    color: '#ccc',
    marginBottom: '10px',
  },
  phone: {
    color: '#ffeb3b',
  },
  mapIframe: {
    borderRadius: '8px',
    marginTop: '10px',
  },
};

export default Contact;
