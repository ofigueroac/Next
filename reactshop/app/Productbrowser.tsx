"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import SelectField from "./SelectField";
import type { Product } from "./ProductGrid";

export default function ProductBrowser({ products }: { products: Product[] }) {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const visibleProducts = products.filter((product) => {
    const matchesKeyword = product.title
      .toLowerCase()
      .includes(keyword.toLowerCase());
    const matchesCategory = category === "" || product.category === category;

    return matchesKeyword && matchesCategory;
  });

  if (sort === "priceLowToHigh") {
    visibleProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHighToLow") {
    visibleProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    visibleProducts.sort((a, b) => b.rating - a.rating);
  }

  const categoryOptions = [
    { value: "", label: "All categories" },
    ...[...new Set(products.map((p) => p.category))]
      .sort()
      .map((c) => ({ value: c, label: c })),
  ];
  const sortOptions = [
    { value: "", label: "Featured" },
    { value: "priceLowToHigh", label: "Price Low To High" },
    { value: "priceHighToLow", label: "Price High To Low" },
    { value: "rating", label: "Rating" },
  ];
  function handleReset() {
    setKeyword("");
    setCategory("");
    setSort("");
  }

  return (
    <>
      <SearchBar keyword={keyword} onKeywordChange={setKeyword}></SearchBar>
      <div className="mx-auto flex w-1/2 px-4 pt-4">
        <button
          type="button"
          onClick={handleReset}
          className="cursor-pointer rounded-md border border-zinc-300 bg-white px-4 py-2 font-medium text-black transition-colors hover:border-zinc-500 hover:bg-zinc-100 focus:border-zinc-500 focus:outline-none"
        >
          Reset
        </button>
      </div>

      <SelectField
        label="Category"
        name="category"
        value={category}
        options={categoryOptions}
        onChange={setCategory}
      />

      <SelectField
        label="Sort"
        name="sort"
        value={sort}
        options={sortOptions}
        onChange={setSort}
      />

      <ul className="mx-auto grid w-1/2 list-none grid-cols-4 gap-4 p-4">
        {visibleProducts.map((product) => (
          <li key={product.id}>
            <ProductCard productData={product}></ProductCard>
          </li>
        ))}
      </ul>
    </>
  );
}
