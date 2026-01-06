import Navbar from '@/src/app/components/Navbar';
import Hero from '@/src/app/components/sections/Hero';
import About from '@/src/app/components/sections/About';
import Programs from '@/src/app/components/sections/Programs';
import WhyUs from '@/src/app/components/sections/WhyUs';
import Gallery from '@/src/app/components/sections/Gallery';
import Testimonials from '@/src/app/components/sections/Testimonials';
import Cta from '@/src/app/components/sections/Cta';
import Footer from '@/src/app/components/sections/Footer';

export const dynamic = 'force-static';
export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization', // Atau 'WebSite'
    name: 'Best Baby Indonesia',
    url: 'https://bestbabyindonesia.vercel.app',
    logo: 'https://bestbabyindonesia.vercel.app/hero.jpg',
    description: 'Platform kompetisi foto anak dan pengembangan bakat.',
    sameAs: [
      'https://instagram.com/bestbaby.id',
      'https://tiktok.com/@bestbaby.id'
    ]
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Cta />
      <Footer />
      
      {/* Floating WA Button */}
      <a href="https://wa.me/message/MPXPQ7CDMRG6O1" target="_blank" className="floating-wa" title="Hubungi Kami" data-aos="zoom-in" data-aos-delay="1000">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </main>
  );
}