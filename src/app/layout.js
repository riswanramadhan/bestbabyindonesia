import './globals.css';
import { Nunito } from 'next/font/google';
import Script from 'next/script';
import AOSInit from '@/src/app/components/AOSInit' // Komponen inisialisasi animasi
import LightboxProvider from '@/src/app/components/LightboxProvider'

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
});

export const metadata = {
  title: 'Best Baby Indonesia',
  description: 'Kompetisi Foto & Pengembangan Bakat Anak',

  verification: {
    google: "xMYzBHOvyktvEQhprsMYHl38Ea3GPcIkShFYaXj3RKo",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* FontAwesome CDN */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={nunito.className}>
        <AOSInit /> {/* Jalankan animasi */}
        <LightboxProvider />
        {children}
      </body>
    </html>
  );
}