export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container about-grid">
        <div className="about-img" data-aos="fade-right" data-aos-duration="1000">
          <img src="abaoutimage.jpg" alt="Family Moment" />
        </div>
        <div className="about-text" data-aos="fade-left" data-aos-duration="1000">
          <h2 className="section-title">Apa itu Best Baby Indonesia?</h2>
          <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--text-light)' }}>
            Kami adalah wadah kreatif bagi keluarga muda Indonesia untuk mengapresiasi tumbuh kembang si kecil. Lebih dari sekadar lomba foto, kami membangun komunitas yang mendukung potensi anak sejak dini.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <i className="fa-solid fa-check-circle" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
              <span>Event organizer anak berpengalaman & profesional.</span>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <i className="fa-solid fa-check-circle" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
              <span>Sistem penilaian objektif dan transparan.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}