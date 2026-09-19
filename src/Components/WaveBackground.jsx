import React from 'react';
import './WaveBackground.css';

const WaveBackground = ({ children }) => {
  return (
    <div className="hero-container">
      <div className="wave-background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="wave-svg"
        >
          <g fill="none" stroke="#d1d5db" strokeWidth="1.5" opacity="0.6">
            <path d="M0,160 C320,300 420,30 720,160 C1020,290 1120,60 1440,160" transform="translate(0, -40)" />
            <path d="M0,160 C320,300 420,30 720,160 C1020,290 1120,60 1440,160" transform="translate(0, -20)" />
            <path d="M0,160 C320,300 420,30 720,160 C1020,290 1120,60 1440,160" transform="translate(0, 0)" />
            <path d="M0,160 C320,300 420,30 720,160 C1020,290 1120,60 1440,160" transform="translate(0, 20)" />
            <path d="M0,160 C320,300 420,30 720,160 C1020,290 1120,60 1440,160" transform="translate(0, 40)" />
            <path d="M0,160 C320,300 420,30 720,160 C1020,290 1120,60 1440,160" transform="translate(0, 60)" />
            <path d="M0,160 C320,300 420,30 720,160 C1020,290 1120,60 1440,160" transform="translate(0, 80)" />
            <path d="M0,160 C320,300 420,30 720,160 C1020,290 1120,60 1440,160" transform="translate(0, 100)" />
            <path d="M0,160 C320,300 420,30 720,160 C1020,290 1120,60 1440,160" transform="translate(0, 120)" />
          </g>
        </svg>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default WaveBackground;