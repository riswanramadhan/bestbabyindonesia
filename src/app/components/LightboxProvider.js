"use client";
import React, { useEffect, useState } from 'react';

export default function LightboxProvider() {
  const [openSrc, setOpenSrc] = useState(null);
  const [openAlt, setOpenAlt] = useState('');

  useEffect(() => {
    // click handler for images with `.lightbox` class
    const onClick = (e) => {
      const img = e.target.closest && e.target.closest('img.lightbox');
      if (img) {
        setOpenSrc(img.src);
        setOpenAlt(img.alt || '');
        document.body.style.overflow = 'hidden';
      }
    };

    // attach delegated click listener at document level
    document.addEventListener('click', onClick);

    // Esc key to close
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, []);

  function close() {
    setOpenSrc(null);
    setOpenAlt('');
    document.body.style.overflow = '';
  }

  if (!openSrc) return null;

  return (
    <div style={overlayStyle} onClick={close} role="dialog" aria-modal="true">
      <div style={panelStyle} onClick={(e) => e.stopPropagation()}>
        <button aria-label="Close image" onClick={close} style={closeBtnStyle}>&times;</button>
        <img src={openSrc} alt={openAlt} style={imgStyle} />
        {openAlt ? <div style={captionStyle}>{openAlt}</div> : null}
      </div>
    </div>
  );
}

// Inline styles to avoid editing globals; they're minimal and scoped to the provider
const overlayStyle = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 3000,
  padding: '20px'
};

const panelStyle = {
  position: 'relative',
  maxWidth: '1100px',
  width: '100%',
  maxHeight: '90vh',
  overflow: 'auto',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const imgStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
};

const closeBtnStyle = {
  position: 'absolute',
  right: '8px',
  top: '8px',
  background: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '36px',
  lineHeight: 1,
  cursor: 'pointer'
};

const captionStyle = {
  marginTop: '12px',
  color: 'rgba(255,255,255,0.9)',
  fontSize: '0.95rem',
  textAlign: 'center'
};
