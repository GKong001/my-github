import React from 'react';
import './Footer.css'; // ใช้สำหรับสไตล์เพิ่มเติม

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '40px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/* Our Top Cities Section */}
        <div>
          <h3 style={{ color: '#FFD54F' }}>Our top cities</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              'San Francisco',
              'Miami',
              'San Diego',
              'East Bay',
              'Long Beach',
              'Los Angeles',
              'Washington DC',
              'Seattle',
              'Portland',
              'Nashville',
              'New York City',
              'Orange County',
              'Atlanta',
              'Charlotte',
              'Denver',
              'Chicago',
              'Phoenix',
              'Las Vegas',
              'Sacramento',
              'Oklahoma City',
              'Columbus',
              'New Mexico',
              'Albuquerque',
              'New Orleans',
            ].map((city, index) => (
              <p key={index} style={{ margin: '0 15px 10px 0' }}>
                {city}
              </p>
            ))}
          </div>
        </div>

        {/* Footer Links Section */}
        <div>
          <h3 style={{ color: '#FFD54F' }}>Company</h3>
          {['About us', 'Team', 'Careers', 'Blog'].map((link, index) => (
            <p key={index} style={{ margin: '5px 0' }}>
              {link}
            </p>
          ))}
        </div>
        <div>
          <h3 style={{ color: '#FFD54F' }}>Contact</h3>
          {['Help & Support', 'Partner with us', 'Ride with us'].map((link, index) => (
            <p key={index} style={{ margin: '5px 0' }}>
              {link}
            </p>
          ))}
        </div>
        <div>
          <h3 style={{ color: '#FFD54F' }}>Legal</h3>
          {['Terms & Conditions', 'Refund & Cancellation', 'Privacy Policy', 'Cookie Policy'].map((link, index) => (
            <p key={index} style={{ margin: '5px 0' }}>
              {link}
            </p>
          ))}
        </div>

        {/* Subscribe Section */}
        <div style={{ maxWidth: '300px' }}>
          <h3 style={{ color: '#FFD54F' }}>Receive exclusive offers in your mailbox</h3>
          <input
            type="email"
            placeholder="Enter Your email"
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '5px',
              border: 'none',
            }}
          />
          <button
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#FFD54F',
              color: '#333',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div style={{ textAlign: 'center', marginTop: '20px', borderTop: '1px solid #444', paddingTop: '20px' }}>
        <p>
          All rights Reserved © <strong>Your Company, 2021</strong>
        </p>
        <p>Made with ❤️ by Themewagon</p>
      </div>
    </footer>
  );
}

export default Footer;
