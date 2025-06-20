import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <a
            href="https://maps.app.goo.gl/33xQ4QwtKkRYTXR48"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            📍 12137 23 Mile Rd, Shelby Township
          </a>
        </div>
        <div className="footer-center">
          <p>© {new Date().getFullYear()} Umi Sushi · All rights reserved</p>
        </div>
        <div className="footer-right">
          <a href="tel:+15867268360" className="footer-link">
            📞 (586) 726-8360
          </a>
        </div>
      </div>
    </footer>
  );
}
