export default function Programs() {
  return (
    <section id="programs" className="section-padding programs">
      {/* Top Wave Divider (Rotated) */}
      <div style={{ position: 'absolute', top: '-1px', left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, transform: 'rotate(180deg)' }}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
        </svg>
      </div>

      <div className="container">
        <div className="text-center" data-aos="fade-down">
          <h2 className="section-title">Program Unggulan</h2>
          <p className="text-muted">Kegiatan seru untuk mengembangkan potensi si kecil</p>
        </div>
        <div className="program-grid">
          {/* Card 1 */}
          <div className="program-card" data-aos="fade-up" data-aos-delay="0">
            <div className="program-icon"><i className="fa-solid fa-camera"></i></div>
            <h3>Photo Contest</h3>
            <p style={{ color: 'var(--text-light)' }}>Kompetisi foto tematik bulanan dengan hadiah uang tunai, piala, dan sertifikat eksklusif.</p>
          </div>
          {/* Card 2 */}
          <div className="program-card" data-aos="fade-up" data-aos-delay="150">
            <div className="program-icon"><i className="fa-solid fa-star"></i></div>
            <h3>Talent Scouting</h3>
            <p style={{ color: 'var(--text-light)' }}>Pencarian bakat model cilik dan penyaluran potensi ke dunia entertainment & iklan.</p>
          </div>
          {/* Card 3 */}
          <div className="program-card" data-aos="fade-up" data-aos-delay="300">
            <div className="program-icon"><i className="fa-solid fa-users"></i></div>
            <h3>Komunitas & Event</h3>
            <p style={{ color: 'var(--text-light)' }}>Webinar parenting, meet & greet, dan sharing session bersama ahli tumbuh kembang.</p>
          </div>
        </div>
      </div>
    </section>
  );
}