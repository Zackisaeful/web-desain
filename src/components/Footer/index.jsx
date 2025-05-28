import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        <div className="footer-section footer-brand">
          <h3 className="footer-heading">Cirewang Beach</h3>
          <p className="footer-text">&copy; 2025. All rights reserved.</p>
          <p className="footer-text">Developed by Farhan Ginting.</p>
          <p className="footer-text">
            Experience the tranquility of Subang's hidden gem.
          </p>
        </div>

        <div className="footer-section footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-list">
            <li>
              <Link to={'/'} className="footer-link">
                About Cirewang
              </Link>
            </li>
            <li>
              <Link to={'/plan-your-visit'} className="footer-link">
                What to Do
              </Link>
            </li>
            <li>
              <Link  to={'/gallery'} className="footer-link">
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link to="/plan-your-visit" className="footer-link">
                Visit Information
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-legal">
          <h3 className="footer-heading">Legal & Help</h3>
          <ul className="footer-list">
            <li>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Accessibility
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-social">
          <h3 className="footer-heading">Follow Us</h3>
          <ul className="social-list">
            <li>
              <a
                href="#"
                className="social-link"
                aria-label="Facebook"
              >
                <FaFacebookF className="social-icon" />
                <span className="social-text">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="social-link"
                aria-label="Instagram"
              >
                <FaInstagram className="social-icon" />
                <span className="social-text">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="social-link" aria-label="TikTok">
                <FaTiktok className="social-icon" />
                <span className="social-text">TikTok</span>
              </a>
            </li>
            <li>
              <a href="#" className="social-link" aria-label="YouTube">
                <FaYoutube className="social-icon" />
                <span className="social-text">YouTube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p className="footer-bottom-text">Managed by Subang Tourism Board</p>
        <p className="footer-bottom-text">
          <a href="#top" className="back-to-top">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
            Back to Top
          </a>
        </p>
      </div>
    </footer>
  );
}
