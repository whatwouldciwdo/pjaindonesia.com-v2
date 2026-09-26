import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getProductBySlug, getAllProductSlugs, ProductData } from '@/lib/products';
import styles from '@/styles/modules/productDetail.module.css';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found - Ventrex',
    };
  }

  return {
    title: `${product.title} - Ventrex`,
    description: product.description,
    openGraph: {
      title: `${product.title} - Ventrex`,
      description: product.description,
      images: product.images.length > 0 ? [{ url: product.images[0] }] : [],
    },
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className={styles.productPage}>
      <div className="container">
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href="/en/">Home</Link>
          <span className={styles.separator}>/</span>
          <Link href={`/en/${product.categorySlug}`}>{product.category}</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{product.title}</span>
        </nav>

        <div className={styles.productHero}>
          <div className={styles.imageCol}>
            {product.images && product.images.length > 0 && (
              <div className={styles.mainImage}>
                <Image 
                  src={product.images[0]} 
                  alt={product.title}
                  width={800}
                  height={800}
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                  priority
                />
              </div>
            )}
          </div>
          <div className={styles.infoCol}>
            <h1 className="title-l has-black-color">{product.title}</h1>
            <div className={styles.description}>
              <p>{product.description}</p>
            </div>
            
            {product.features && product.features.length > 0 && (
              <div className={styles.features}>
                <h3 className="title-s">Key Features</h3>
                <ul>
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.downloads && product.downloads.length > 0 && (
              <div className={styles.downloads}>
                <h3 className="title-s">Downloads</h3>
                <div className={styles.downloadLinks}>
                  {product.downloads.map((dl, idx) => (
                    <a key={idx} href={dl.file} target="_blank" rel="noopener noreferrer" className="btn is-black">
                      {dl.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div className={styles.specifications}>
            <h2 className="title-m">Specifications</h2>
            <div className={styles.tableWrapper}>
              <table className={styles.specsTable}>
                <tbody>
                  {Object.entries(product.specifications).map(([key, value], idx) => (
                    <tr key={idx}>
                      <th>{key}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {product.relatedProducts && product.relatedProducts.length > 0 && (
          <div className={styles.relatedProducts}>
            <h2 className="title-m">Related Products</h2>
            <div className={styles.relatedGrid}>
              {product.relatedProducts.map((slug, idx) => {
                const relProd = getProductBySlug(slug);
                if (!relProd) return null;
                return (
                  <Link href={`/en/products/${relProd.slug}`} key={idx} className={styles.relatedCard}>
                    <div className={styles.relatedImage}>
                      {relProd.images && relProd.images.length > 0 && (
                        <Image 
                          src={relProd.images[0]} 
                          alt={relProd.title}
                          width={300}
                          height={300}
                          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                      )}
                    </div>
                    <h3 className="title-s">{relProd.title}</h3>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
