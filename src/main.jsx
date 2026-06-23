import React from 'react';

export default function SignPanel() {
  return (
    <div className="sign-panel">
      <span>Alfabeto em sinais</span>
      <div className="sign-image-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect width="100" height="100" fill="lightgray" />
        </svg>
      </div>
      <p className="sign-helper">...</p>
    </div>
  );
}
