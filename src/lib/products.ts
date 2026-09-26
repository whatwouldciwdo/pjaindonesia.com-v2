import productsData from '@/data/products.json';

export interface ProductData {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  images: string[];
  downloads: { name: string; file: string }[];
  relatedProducts: string[];
}

export function getProductBySlug(slug: string): ProductData | undefined {
  return productsData.find((p: ProductData) => p.slug === slug);
}

export function getProductsByCategory(category: string): ProductData[] {
  return productsData.filter((p: ProductData) => p.categorySlug === category);
}

export function getAllProductSlugs(): string[] {
  return productsData.map((p: ProductData) => p.slug);
}
