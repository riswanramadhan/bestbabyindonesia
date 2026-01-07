"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Efek untuk menutup menu jika layar di-resize kembali ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header-nav">
      <div className="container">
        <nav className="nav-pill">
          
          {/* BAGIAN KIRI: LOGO */}
          <div className="nav-left">
            <div className="logo">Best Baby <span>Indonesia</span></div>
          </div>

          {/* BAGIAN TENGAH: MENU (DESKTOP & MOBILE WRAPPER) */}
          <div className="nav-center">
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
              <li><Link href="#about" onClick={() => setIsOpen(false)}>Tentang Kami</Link></li>
              <li><Link href="#programs" onClick={() => setIsOpen(false)}>Program</Link></li>
              <li><Link href="#gallery" onClick={() => setIsOpen(false)}>Galeri</Link></li>
              <li><Link href="#contact" onClick={() => setIsOpen(false)}>Kontak</Link></li>

              {/* Mobile CTA shown inside hamburger menu */}
              <li className="mobile-cta">
                <a href="https://wa.me/message/MPXPQ7CDMRG6O1" className="btn btn-cta" onClick={() => setIsOpen(false)}>
                  <i className="fa-brands fa-whatsapp" style={{marginRight: '0.5rem', color: 'white'}}></i>
                  <span style={{color: 'white'}}>Daftar Sekarang</span>
                </a>
              </li>
            </ul>
          </div>

          {/* BAGIAN KANAN: CTA DESKTOP & HAMBURGER */}
          <div className="nav-right">
            {/* CTA KHUSUS DESKTOP (akan disembunyikan pada mobile via CSS) */}
            <a href="https://wa.me/message/MPXPQ7CDMRG6O1" className="btn btn-cta desktop-cta">
              <i className="fa-brands fa-whatsapp"></i>
              <span>Daftar Sekarang</span>
            </a>

            {/* TOMBOL HAMBURGER */}
            <button 
              className={`hamburger ${isOpen ? 'open' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </nav>
      </div>
    </header>
  );
}