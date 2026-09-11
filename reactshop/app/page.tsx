import ProductGrid from "./ProductGrid";

export default async function Home({ searchParams }: PageProps<"/">) {
  const { q } = await searchParams;
  const query = typeof q === "string" ? q : "";

  return <ProductGrid query={query}></ProductGrid>;
}
