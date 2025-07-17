import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>ABOUT</h3>
        <p>
          Engineering and professional education are among the key enablers of growth for
          transforming the national as well as the global economy. As we continue to strive
          for academic excellence in engineering and management education, through
          innovative techniques, ABES Engineering College is being preferred as the
          destination for students across the country.
        </p>
        <ul>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>QUICK LINKS</h3>
        <ul>
          <li><a href="/">Canteen Home</a></li>
          <li><a href="https://abes.ac.in/life@abes_new.html">About ABES</a></li>
          <li><a href="https://github.com/Priyakumar-15">Git Repository</a></li>
          <li><a href="https://www.abes.ac.in/">ABESEC</a></li>
          
        </ul>
      </div>

      <div className="footer-section">
        <h3>CONTACT INFORMATION</h3>
        <p>
          <i className="fas fa-phone"></i> 0120 713 5112
        </p>
        <p>
          <i className="fas fa-envelope"></i>{' '}
          <a href="https://abes.ac.in/courses-offered.php">https://abes.ac.in/courses-offered.php</a>
        </p>
        <p>
          <i className="fas fa-map-marker-alt"></i> 19th KM Stone, NH-09, Ghaziabad,
          Uttar Pradesh 201009
        </p>
        <p>
          For Professional Courses, Visit:{' '}
          <a href="https://abes.ac.in/CAREER-department.php">https://abes.ac.in/CAREER-department.php</a>
        </p>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2024 - 2025. All Rights Reserved</p>
        <p>
          Designed & Developed with ❤️ By PRIYA KUMAR and RAUNAK TOMAR
        </p>
      </div>
    </footer>
  );
};

export default Footer;