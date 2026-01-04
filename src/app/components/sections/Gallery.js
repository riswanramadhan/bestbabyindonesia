export default function Gallery() {
  return (
    <section id="gallery" className="section-padding" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <div className="text-center" data-aos="fade-down">
          <h2 className="section-title">Galeri Keceriaan</h2>
          <p style={{ color: 'var(--text-light)' }}>Momen-momen lucu para pemenang</p>
        </div>
        <div className="gallery-grid">
          
          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="0">
            <img src="testimoni 1.jpg" alt="Baby 1" />
            <div className="gallery-overlay"><i className="fa-solid fa-heart"></i></div>
          </div>

          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="100">
            <img className="lightbox" src="hero2.jpg" alt="Baby 2" />
            <div className="gallery-overlay"><i className="fa-solid fa-heart"></i></div>
          </div>

          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="200">
            <img src="testimoni 3.jpg" alt="Baby 3" />
            <div className="gallery-overlay"><i className="fa-solid fa-heart"></i></div>
          </div>

          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="300">
            <img src="testimoni 4.jpg" alt="Baby 4" />
            <div className="gallery-overlay"><i className="fa-solid fa-heart"></i></div>
          </div>

          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="300">
            <img src="testimoni 5.jpg" alt="Baby 5" />
            <div className="gallery-overlay"><i className="fa-solid fa-heart"></i></div>
          </div>

          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="300">
            <img src="testimoni 6.jpg" alt="Baby 6" />
            <div className="gallery-overlay"><i className="fa-solid fa-heart"></i></div>
          </div>

          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="300">
            <img src="testimoni 7.jpg" alt="Baby 7" />
            <div className="gallery-overlay"><i className="fa-solid fa-heart"></i></div>
          </div>
          
          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="300">
            <img src="hero.jpg" alt="Baby 8" />
            <div className="gallery-overlay"><i className="fa-solid fa-heart"></i></div>
          </div>

          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="300">
            <img src="hero3.jpg" alt="Baby 9" />
            <div className="gallery-overlay"><i className="fa-solid fa-heart"></i></div>
          </div>

        </div>
      </div>
    </section>
  );
}