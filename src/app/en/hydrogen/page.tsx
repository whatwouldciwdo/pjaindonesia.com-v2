import { Metadata } from 'next';
import CategoryHero from '@/components/sections/CategoryHero';
import CategoryIntro from '@/components/sections/CategoryIntro';
import ProductGrid from '@/components/sections/ProductGrid';
import WhyChoose from '@/components/sections/WhyChoose';
import QuickLinks from '@/components/sections/QuickLinks';
import '@/assets/css/pages/page-2c9ddef8.css';

export const metadata: Metadata = {
  title: 'H2 Mobility - Ventrex',
  description: 'Innovative H2 valve solutions and pressure regulation technology for the automotive light-duty, heavy-duty and racing segments.',
};

export default function HydrogenPage() {
  return (
    <main>
      <CategoryHero 
        title="H2 Mobility"
        imageSrc="/assets/images/dynamic/dbfa89a4.png"
        altText="Ventrex - H2 Mobility"
      />

      <CategoryIntro>
        <>We are the <span className="u-blue-gradient">first port of call</span> for the development and production of<br /><span className="u-blue-gradient">H2 valve technology</span> for the <span className="u-blue-gradient">heavy-duty</span> segment.</>
      </CategoryIntro>

      <ProductGrid 
        style="threecell"
        products={[
          { title: 'VENTCON <br/> Pressure Control System', imageSrc: '/assets/images/dynamic/ccff46d7.png' },
          { title: 'Fuel Shut-off Valve <br/> for CH4, H2 & NH3', imageSrc: '/assets/images/dynamic/95c8600d.png' },
          { title: 'H2 Electronic Pressure <br/> Regulator 350 bar', imageSrc: '/assets/images/dynamic/0b703c5d.png' },
          { title: 'H2 End Plug', imageSrc: '/assets/images/dynamic/afc77607.png' },
          { title: 'H2 On-Tank Valve', imageSrc: '/assets/images/dynamic/6065b3ed.png' },
          { title: 'H2 OCTOBLOCK <br/> Electronic Pressure Regulator', imageSrc: '/assets/images/dynamic/aed27084.png' },
          { title: 'H2 Mechanical Pressure <br/> Regulator 700 bar', imageSrc: '/assets/images/dynamic/48878167.png' },
          { title: 'H2 Service Defueling Port / <br/> Receptacle', imageSrc: '/assets/images/dynamic/f078ed6c.png' },
          { title: 'Liquified H2 Pressure Relief Valve', imageSrc: '/assets/images/dynamic/ed6635ab.png' },
          { title: 'H2 Solenoid Valve', imageSrc: '/assets/images/dynamic/a48a3e7f.png' },
        ]}
      />

      <WhyChoose 
        subhead="Why you should choose our product"
        title="Leveraging on our profound knowledge and many years of experience in the serial production of air-conditioning valves and electronic pressure regulation for CNG, we have further developed this technology and transferred it to hydrogen applications."
        cards={[
          { label: 'High-quality manufacturing facility, with clean room assembly conditions and 100% end of line check', imageSrc: '/assets/images/dynamic/52d7a63e.jpg' },
          { label: <>Shaping the engines of tomorrow<br/> together with our partners <br/>©AVL RACETECH</>, imageSrc: '/assets/images/dynamic/c2bb7d1e.jpg' },
          { label: <>Towards a CO2-free mobility <br/> both on-road and off-road <br/> ©LIEBHERR</>, imageSrc: '/assets/images/dynamic/6e8cc344.jpg' },
        ]}
      />

      <QuickLinks 
        links={[
          { title: <>Air conditioning <br/> & special valves</>, href: '/en/air-conditioning-valves/', imageSrc: '/assets/images/dynamic/925b16ec.jpg' },
          { title: <>CNG / LNG <br/> valve component</>, href: '/en/cng-lng/', imageSrc: '/assets/images/dynamic/c1f02492.jpg' },
          { title: <>Compressors for <br/> pneumatic applications</>, href: '/en/compressors/', imageSrc: '/assets/images/dynamic/8d0087dd.jpg' },
        ]}
      />
      
      <div className="c-overlay-product js-overlay-product"></div>
    </main>
  );
}
