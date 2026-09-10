import ProductBrowser from "./Productbrowser";
export type Product = {
  id: number;
  title: string;
  rating: number;
  description: string;
  thumbnail: string;
  price: number;
  category: string;
};
async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products", {
    // Optional caching strategies:
    // cache: 'no-store', // Always dynamic (never cached)
    next: { revalidate: 60 }, // Incremental Static Regeneration (revalidate every 60s)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const data: { products: Product[] } = await res.json();
  return data.products;
}

export default async function ProductGrid() {
  const products = await getProducts();
  return <ProductBrowser products={products}></ProductBrowser>;
}
