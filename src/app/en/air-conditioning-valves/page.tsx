import { Metadata } from 'next';
import CategoryHero from '@/components/sections/CategoryHero';
import CategoryIntro from '@/components/sections/CategoryIntro';
import CategoryBanner from '@/components/sections/CategoryBanner';
import ProductGrid from '@/components/sections/ProductGrid';
import WhyChoose from '@/components/sections/WhyChoose';
import QuickLinks from '@/components/sections/QuickLinks';
import '@/assets/css/pages/page-2c9ddef8.css';

export const metadata: Metadata = {
  title: 'Air Conditioning Valves',
  description: 'Leading experts in automotive air conditioning valves, supporting R134a, R1234yf, R744, and R290 refrigerants.',
};

export default function AirConditioningValvesPage() {
  return (
    <main>
      <CategoryHero 
        title="Air conditioning & special valves"
        imageSrc="/assets/images/dynamic/1aa39d5c.png"
        altText="Ventrex - Air Conditioning & Special Valves"
      />

      <CategoryIntro>
        <>We are <span className="u-blue-gradient">THE experts</span> for the development of new valves solutions,<br />addressing further promising<br /><span className="u-blue-gradient">thermal management systems</span><br />and <span className="u-blue-gradient">future vehicle configurations</span>.</>
      </CategoryIntro>

      <CategoryBanner 
        title="Complete Valves"
        copy="Fully assembled and 100% tested valve solutions to be screwed into any air-conditioning line or into a corresponding metal block."
        imageSrc="/assets/images/dynamic/754ec65b.png"
      />

      <ProductGrid 
        style="threecell"
        products={[
          { title: 'Pre-assembled <br/> Charge Ports', imageSrc: '/assets/images/dynamic/5b886a6a.png' },
          { title: 'Pressure Relief <br/> Valves R744', imageSrc: '/assets/images/dynamic/12790aec.png' },
          { title: 'Check Valve R744', imageSrc: '/assets/images/dynamic/04b73635.png' },
        ]}
      />

      <CategoryBanner 
        title="Valve Components"
        copy="Valve cores used in charge and service ports for automotive air conditioning systems. The valve cores are screwed into aluminum or stainless steel housings, protected with valve caps."
        imageSrc="/assets/images/dynamic/f4446e99.png"
      />

      <ProductGrid 
        style="twocell"
        products={[
          { title: 'EPDM Filling Valve Core (R134a_R1234yf)', imageSrc: '/assets/images/dynamic/b9286a02.png' },
          { title: 'HNBR Filling Valve Core  (R134a_R1234yf_R290)', imageSrc: '/assets/images/dynamic/f2a54a78.png' },
          { title: 'R744 Filling Valve Core', imageSrc: '/assets/images/dynamic/07bab7c0.png' },
          { title: 'Large Bore Valve Core', imageSrc: '/assets/images/dynamic/31a4879d.png' },
          { title: 'Valve Housings', imageSrc: '/assets/images/dynamic/9362727c.png' },
          { title: 'Valve Caps', imageSrc: '/assets/images/dynamic/ea0f0f78.png' },
        ]}
      />

      <WhyChoose 
        title="Our portfolio supports R134a, R1234yf, R744, and R290 refrigerants."
        cards={[
          { label: 'Over 20 years of customer loyalty', imageSrc: '/assets/images/dynamic/baaef101.jpg' },
          { label: <>Fully automated <br/> assembly line</>, imageSrc: '/assets/images/dynamic/aa27e50b.jpg' },
          { label: <>100%<br/>end-of-line testing</>, imageSrc: '/assets/images/dynamic/4cfc37b6.jpg' },
        ]}
      />

      <QuickLinks 
        links={[
          { title: 'H2 Mobility', href: '/en/hydrogen/', imageSrc: '/assets/images/dynamic/53eb9c9c.jpg' },
          { title: <>CNG / LNG <br/> valve component</>, href: '/en/cng-lng/', imageSrc: '/assets/images/dynamic/c1f02492.jpg' },
          { title: <>Compressors for <br/> pneumatic applications</>, href: '/en/compressors/', imageSrc: '/assets/images/dynamic/8d0087dd.jpg' },
        ]}
      />
      
      <div className="c-overlay-product js-overlay-product"></div>
    </main>
  );
}
