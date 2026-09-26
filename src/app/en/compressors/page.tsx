import { Metadata } from 'next';
import CategoryHero from '@/components/sections/CategoryHero';
import CategoryIntro from '@/components/sections/CategoryIntro';
import ProductGrid from '@/components/sections/ProductGrid';
import WhyChoose from '@/components/sections/WhyChoose';
import QuickLinks from '@/components/sections/QuickLinks';
import '@/assets/css/pages/page-2c9ddef8.css';

export const metadata: Metadata = {
  title: 'Compressors for pneumatic applications - Ventrex',
  description: 'Market leading solutions for air-suspended seats for agricultural and construction machines.',
};

export default function CompressorsPage() {
  return (
    <main>
      <CategoryHero 
        title="Compressors for pneumatic applications"
        imageSrc="/assets/images/dynamic/85ac9c2d.png"
        altText="Ventrex - Compressors for pneumatic applications"
        titleSize={70}
      />

      <CategoryIntro>
        <>We contribute to the ergonomics of agricultural and construction machines with our <span className="u-blue-gradient">market leading solutions</span> for air-suspended seats.</>
      </CategoryIntro>

      <ProductGrid 
        style="threecell"
        products={[
          { title: 'Compressor for Seats and Industrial Use Gen. 2', imageSrc: '/assets/images/dynamic/9064e4a2.png' },
          { title: 'Compressor for Seats and Industrial Use Gen. 3', imageSrc: '/assets/images/dynamic/7bdd3087.png' },
          { title: 'Drain Valve', imageSrc: '/assets/images/dynamic/b2185faa.png' },
        ]}
      />

      <WhyChoose 
        subhead="Why you should choose our product"
        title="Our portfolio consists of 12 V, 24 V, and 48 V versions with customer- specific pneumatic interfaces and integrated EMC components."
        cards={[
          { label: 'Over 20 years of customer loyality', imageSrc: '/assets/images/dynamic/69a8e0d9.jpg' },
          { label: 'Fully automated assembly line', imageSrc: '/assets/images/dynamic/75ac5e47.jpg' },
          { label: '100% end of line testing', imageSrc: '/assets/images/dynamic/4287bd71.jpg' },
        ]}
      />

      <QuickLinks 
        links={[
          { title: <>Air conditioning <br/> & special valves</>, href: '/en/air-conditioning-valves/', imageSrc: '/assets/images/dynamic/925b16ec.jpg' },
          { title: 'H2 Mobility', href: '/en/hydrogen/', imageSrc: '/assets/images/dynamic/53eb9c9c.jpg' },
          { title: <>CNG / LNG <br/> valve component</>, href: '/en/cng-lng/', imageSrc: '/assets/images/dynamic/c1f02492.jpg' },
        ]}
      />
      
      <div className="c-overlay-product js-overlay-product"></div>
    </main>
  );
}
