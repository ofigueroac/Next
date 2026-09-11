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

async function getProducts(productName: string = ""): Promise<Product[]> {
  const urlAPI = "https://dummyjson.com/products";
  const search =
    productName === ""
      ? ""
      : "/search?q=" + encodeURIComponent(productName);
  const res = await fetch(urlAPI + search, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const data: { products: Product[] } = await res.json();
  return data.products;
}

export default async function ProductGrid({ query }: { query: string }) {
  const products = await getProducts(query);

  return <ProductBrowser products={products}></ProductBrowser>;
}
