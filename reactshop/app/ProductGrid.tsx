import ProductBrowser, { debouncer } from "./Productbrowser";
import { useState, useEffect } from "react";

export type Product = {
  id: number;
  title: string;
  rating: number;
  description: string;
  thumbnail: string;
  price: number;
  category: string;
};
async function getProducts(productName: string = ""): Promise<Product[]> {
  const isDebounce = productName === "";
  const urlAPI = "https://dummyjson.com/products";
  const search = isDebounce ? "/search?q=" + productName : "";
  const res = await fetch(urlAPI + search, {
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
  let products = await getProducts();
  const [productName, setProductName] = useState("");

  useEffect(() => {
    async () => {
      products = await getProducts(productName);
    };
  }, [setProductName]);

  return (
    <ProductBrowser
      products={products}
      onSearch={setProductName}
    ></ProductBrowser>
  );
}
