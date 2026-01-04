export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          
          <div className="footer-brand">
            <h3 style={{ color: 'var(--secondary)', fontSize: '1.8rem', marginBottom: '15px' }}>Best Baby <span>ID</span></h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Platform kompetisi dan edukasi anak terpercaya di Indonesia. Membantu orang tua mengembangkan potensi anak.</p>
            <div className="social-icons" style={{ marginTop: '25px' }}>
              <a href="https://www.instagram.com/bestbaby.id/"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.tiktok.com/@bestbaby.id"><i className="fa-brands fa-tiktok"></i></a>
              <a href="https://www.facebook.com/bestbaby.id.2025/"><i className="fa-brands fa-facebook"></i></a>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '20px', fontWeight: 700, color: 'var(--text-dark)' }}>Navigasi</h4>
            <ul style={{ lineHeight: 2 }}>
              <li><a href="#about" style={{ color: 'var(--text-light)' }}>Tentang Kami</a></li>
              <li><a href="#programs" style={{ color: 'var(--text-light)' }}>Event</a></li>
              <li><a href="#gallery" style={{ color: 'var(--text-light)' }}>Galeri</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '20px', fontWeight: 700, color: 'var(--text-dark)' }}>Kontak</h4>
            <ul style={{ lineHeight: 2, color: 'var(--text-light)' }}>
              <li><i className="fa-solid fa-envelope" style={{ width: '20px' }}></i> helpdesk.bestbaby.id@gmail.com</li>
              <li><i className="fa-brands fa-whatsapp" style={{ width: '20px' }}></i> +62 857 5613 0538</li>
              <li><i className="fa-solid fa-location-dot" style={{ width: '20px' }}></i> Jakarta, Indonesia</li>
            </ul>
          </div>

        </div>
        <div className="copyright" style={{ textAlign: 'center', borderTop: '1px solid #f0f0f0', paddingTop: '25px', color: '#999', fontSize: '0.9rem' }}>
          &copy;2026 Best Baby Indonesia. All Rights Reserved | Powered by DekatLokal
        </div>
      </div>
    </footer>
  );
}