import React from 'react';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="glass footer-content">
        <p>&copy; {new Date().getFullYear()} JEYAN JERRISH. All rights reserved.</p>
        <div className="social-links">
          <a href="https://linkedin.com/in/jeyan-jerrish-j-b34494386" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/jerrish0007-J" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <style jsx="true">{`
        .footer {
          padding: 4rem 2rem;
        }
        .footer-content {
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 30px;
        }
        .footer p {
          font-size: 0.9rem;
          opacity: 0.6;
        }
        .social-links {
          display: flex;
          gap: 2rem;
        }
        .social-links a {
          text-decoration: none;
          color: var(--text-primary);
          font-size: 0.9rem;
          opacity: 0.6;
          transition: opacity 0.3s;
        }
        .social-links a:hover {
          opacity: 1;
        }
        @media (max-width: 600px) {
          .footer-content {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
