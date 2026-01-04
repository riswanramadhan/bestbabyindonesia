export default function WhyUs() {
  return (
    <section className="section-padding why-us">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '50px' }} data-aos="zoom-in">
          <h2 className="section-title">Kenapa Kami?</h2>
        </div>
        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          <div className="feature-item" data-aos="fade-up" data-aos-delay="0">
            <div className="feature-icon"><i className="fa-solid fa-shield-halved"></i></div>
            <div>
              <h4>Lingkungan Aman</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>Keamanan data dan foto anak adalah prioritas utama kami dengan standar privasi ketat.</p>
            </div>
          </div>

          <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-icon"><i className="fa-solid fa-medal"></i></div>
            <div>
              <h4>Hadiah Terpercaya</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>Distribusi hadiah transparan dan sertifikat yang diakui secara profesional.</p>
            </div>
          </div>

          <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-icon"><i className="fa-solid fa-earth-asia"></i></div>
            <div>
              <h4>Skala Nasional</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>Jaringan peserta dari seluruh Indonesia, memperluas relasi Bunda & Ayah.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}