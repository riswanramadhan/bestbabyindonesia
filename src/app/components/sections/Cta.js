export default function Cta() {
  return (
    <div className="cta-wrapper">
      <section className="cta-section" data-aos="zoom-in-up" data-aos-duration="1000">
        <div className="cta-circle c-1"></div>
        <div className="cta-circle c-2"></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '15px' }}>Siap Menjadi Bintang Cilik?</h2>
          <p style={{ marginBottom: '30px', fontSize: '1.1rem', opacity: 0.95 }}>Daftarkan si kecil sekarang dan raih kesempatan memenangkan hadiah total jutaan rupiah!</p>
          <a href="https://wa.me/message/MPXPQ7CDMRG6O1" className="btn btn-whatsapp" style={{ padding: '15px 40px', fontSize: '1.2rem' }}>
            <i className="fa-brands fa-whatsapp"></i> Daftar Sekarang via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}