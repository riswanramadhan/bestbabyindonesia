"use client";
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  // Slider images - expects files in /public (e.g. /hero.jpg, /hero2.jpg, /hero3.jpg)
  const images = ['/hero.jpg', '/hero2.jpg', '/hero3.jpg'];
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef(null);
  const slidesRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const [dragX, setDragX] = useState(0); // px

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const goTo = (i) => setIndex(i % images.length);

  // autoplay (optional): change slide every 5s
  useEffect(() => {
    const start = () => {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, 5000);
    };
    start();
    return () => clearInterval(autoplayRef.current);
  }, []);

  const startAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
  };

  // Pointer / touch handlers for swipe support
  const onPointerDown = (e) => {
    // support mouse and touch (pointer events)
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    setDragX(0);
    clearInterval(autoplayRef.current);
    if (slidesRef.current && e.pointerId) {
      try { e.target.setPointerCapture?.(e.pointerId); } catch (err) {}
    }
    if (slidesRef.current) slidesRef.current.style.transition = 'none';
  };

  const onPointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    setDragX(dx);
  };

  const onPointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const dx = dragX;
    const width = slidesRef.current?.clientWidth || 1;
    const threshold = Math.max(50, width * 0.12); // either 50px or 12% of width
    slidesRef.current.style.transition = '';
    setDragX(0);
    if (dx < -threshold) {
      // swipe left -> next
      setIndex((i) => (i + 1) % images.length);
    } else if (dx > threshold) {
      // swipe right -> prev
      setIndex((i) => (i - 1 + images.length) % images.length);
    } else {
      // small move -> snap back (no index change)
      setIndex((i) => i);
    }
    // restart autoplay
    startAutoplay();
    if (slidesRef.current && e.pointerId) {
      try { e.target.releasePointerCapture?.(e.pointerId); } catch (err) {}
    }
  };

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text" data-aos="fade-up" data-aos-duration="1000">
          <h1>Rayakan Bakat & Momen Terbaik <span>Si Kecil!</span></h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '30px', maxWidth: '90%' }}>
            Platform kompetisi foto anak dan pengembangan bakat tingkat nasional. Terpercaya, Aman, dan Penuh Keceriaan.
          </p>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <a href="https://wa.me/message/MPXPQ7CDMRG6O1" className="btn btn-primary"><i className="fa-brands fa-whatsapp"></i> Daftar Kontes</a>
            <a href="#programs" className="btn btn-secondary">Lihat Program</a>
          </div>
        </div>

        {/* Slider */}
        <div className="hero-image" data-aos="zoom-in" data-aos-duration="1200">
          <div
            className="hero-slider"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div
              className="slides"
              ref={slidesRef}
              style={{
                transform: `translateX(calc(-${index * 100}% + ${dragX}px))`,
              }}
              aria-live="polite"
            >
              {images.map((src, i) => (
                <div className="slide" key={i}>
                  <img src={src} alt={`Hero ${i + 1}`} />
                </div>
              ))}
            </div>

            <button className="slide-arrow prev" aria-label="Previous" onClick={() => { clearInterval(autoplayRef.current); prev(); }}>&#10094;</button>
            <button className="slide-arrow next" aria-label="Next" onClick={() => { clearInterval(autoplayRef.current); next(); }}>&#10095;</button>

            <div className="slide-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === index ? 'active' : ''}`}
                  onClick={() => { clearInterval(autoplayRef.current); goTo(i); }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG */}
      <div className="wave-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
        </svg>
      </div>
    </section>
  );
}