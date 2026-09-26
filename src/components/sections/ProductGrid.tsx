import React from 'react';
import Link from 'next/link';

export interface ProductCardData {
  id?: string;
  title: string;
  imageSrc: string;
  href?: string;
}

interface ProductGridProps {
  style?: 'twocell' | 'threecell';
  products: ProductCardData[];
}

export function slugify(text: string) {
  return text.toString().toLowerCase()
    .replace(/<[^>]*>?/gm, '') // Remove HTML tags
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export default function ProductGrid({ style = 'threecell', products }: ProductGridProps) {
  return (
    <section className="c-product-grid js-product-grid">
        <div className="container">
            <div className="c-product-grid__container" data-style={style}>
                {products.map((product, index) => {
                    const Card = (
                        <>
                            <h2 className="c-product-card__title title-xm" dangerouslySetInnerHTML={{ __html: product.title }} />
                            <div>
                                <img src={product.imageSrc} className="c-product-card__image" alt="" />
                            </div>
                        </>
                    );
                    
                    const href = product.href || `/en/products/${slugify(product.title)}`;
                    
                    return (
                        <Link href={href} key={index} className="c-product-card js-product-card" data-id={product.id}>
                            {Card}
                        </Link>
                    );
                })}
            </div>
        </div>
    </section>
  );
}
