export default function Testimonials() {
  return (
    <section className="section-padding testimonials">
      <div className="container">
        <div className="text-center" data-aos="fade-down">
          <h2 className="section-title">Kata Bunda & Ayah</h2>
        </div>
        <div className="testimonial-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
          
          <div className="testimonial-card" data-aos="fade-up" data-aos-delay="0">
            <p style={{ fontStyle: 'italic', color: 'var(--text-light)', marginBottom: '20px' }}>"Acaranya rapi banget, adminnya ramah. Anakku jadi lebih percaya diri setelah ikut kontes di sini!"</p>
            <div className="user-info">
              <h4 style={{ fontWeight: 700, color: 'var(--text-dark)' }}>Bunda Sari</h4>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Mama dari Kenzo (3 th)</span>
            </div>
          </div>

          <div className="testimonial-card" data-aos="fade-up" data-aos-delay="150">
            <p style={{ fontStyle: 'italic', color: 'var(--text-light)', marginBottom: '20px' }}>"Suka banget sama konsepnya yang fun tapi tetap profesional. Hadiahnya juga real no tipu-tipu."</p>
            <div className="user-info">
              <h4 style={{ fontWeight: 700, color: 'var(--text-dark)' }}>Ayah Budi</h4>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Papa dari Alesha (1 th)</span>
            </div>
          </div>

          <div className="testimonial-card" data-aos="fade-up" data-aos-delay="300">
            <p style={{ fontStyle: 'italic', color: 'var(--text-light)', marginBottom: '20px' }}>"Terima kasih Best Baby ID, sertifikatnya bagus buat kenang-kenangan kalau anak sudah besar nanti."</p>
            <div className="user-info">
              <h4 style={{ fontWeight: 700, color: 'var(--text-dark)' }}>Bunda Rina</h4>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Mama dari Azka (4 th)</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}