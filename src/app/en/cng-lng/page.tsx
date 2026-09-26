import { Metadata } from 'next';
import CategoryHero from '@/components/sections/CategoryHero';
import CategoryIntro from '@/components/sections/CategoryIntro';
import CategoryBanner from '@/components/sections/CategoryBanner';
import ProductGrid from '@/components/sections/ProductGrid';
import WhyChoose from '@/components/sections/WhyChoose';
import QuickLinks from '@/components/sections/QuickLinks';
import '@/assets/css/pages/page-2c9ddef8.css';

export const metadata: Metadata = {
  title: 'CNG / LNG Valve Components - Ventrex',
  description: 'Pioneers in the development and production of CNG / LNG components and electronic pressure regulation.',
};

export default function CngLngPage() {
  return (
    <main>
      <CategoryHero 
        title={<>CNG / LNG <br/> valve components</>}
        imageSrc="/assets/images/dynamic/8cd4b0a2.png"
        altText="Ventrex - CNG / LNG"
      />

      <CategoryIntro>
        <>We are <span className="u-blue-gradient">the pioneers</span> in the development and production of CNG / LNG components and <span className="u-blue-gradient">electronic pressure regulation</span>.</>
      </CategoryIntro>

      <CategoryBanner 
        title="Electronic Pressure Regulation"
        copy={<>Electro-mechanical valves for the continuous adjustment of gas pressure demanded by the ECU (via the control unit) of the natural gas vehicle. <br/><a href="https://www.youtube.com/watch?v=FEZwlD3Oi18" target="_blank" rel="noopener">Watch the full video here</a></>}
        imageSrc="/assets/images/dynamic/a4d23bb1.png"
      />

      <ProductGrid 
        style="threecell"
        products={[
          { title: 'VENTCON <br/> Pressure Control System', imageSrc: '/assets/images/dynamic/ccff46d7.png' },
          { title: 'Fuel Shut-off Valve <br/> for CH4, H2 & NH3', imageSrc: '/assets/images/dynamic/95c8600d.png' },
          { title: 'EPR Evo 2', imageSrc: '/assets/images/dynamic/4aca9f77.png' },
          { title: 'EPR Evo 3', imageSrc: '/assets/images/dynamic/29d41056.png' },
          { title: 'EPR CNG HD', imageSrc: '/assets/images/dynamic/98b05b74.png' },
          { title: 'EPR LNG HD', imageSrc: '/assets/images/dynamic/8b4f7541.png' },
        ]}
      />

      <CategoryBanner 
        title="LNG Cryogenic Valves"
        copy="Cryogenic valve technology designed for a more effective and efficient operation of liquified natural gas tank systems."
        imageSrc="/assets/images/dynamic/56d22658.png"
      />

      <ProductGrid 
        style="twocell"
        products={[
          { title: 'LNG Cryogenic Valves', imageSrc: '/assets/images/dynamic/cbfccedf.png' },
        ]}
      />

      <WhyChoose 
        subhead="Why you should choose our product"
        title="Our portfolio includes electronic pressure regulators, safety tank valves, end-plugs, and cryogenic valves for LNG tank systems."
        cards={[
          { label: 'Automotive quality standard - approved by ECE regulation', imageSrc: '/assets/images/dynamic/2b2024e6.jpg' },
          { label: 'Over 10 years of serial production experience', imageSrc: '/assets/images/dynamic/c1cb9a92.jpg' },
          { label: 'Clean room assembly conditions and 100% end of line check, including leakage tests', imageSrc: '/assets/images/dynamic/868354ce.jpg' },
        ]}
      />

      <QuickLinks 
        links={[
          { title: <>Air conditioning <br/> & special valves</>, href: '/en/air-conditioning-valves/', imageSrc: '/assets/images/dynamic/925b16ec.jpg' },
          { title: 'H2 Mobility', href: '/en/hydrogen/', imageSrc: '/assets/images/dynamic/53eb9c9c.jpg' },
          { title: <>Compressors for <br/> pneumatic applications</>, href: '/en/compressors/', imageSrc: '/assets/images/dynamic/8d0087dd.jpg' },
        ]}
      />
      
      <div className="c-overlay-product js-overlay-product"></div>
    </main>
  );
}
