"use client";

type SearchBarProps = {
  keyword: string;
  onKeywordChange: (keyword: string) => void;
};

export default function SearchBar({
  keyword,
  onKeywordChange,
}: SearchBarProps) {
  return (
    <div className="mx-auto flex w-1/2 flex-col gap-2 px-4 pt-4">
      <label htmlFor="product-search" className="font-medium">
        Search
      </label>
      <input
        id="product-search"
        type="text"
        value={keyword}
        placeholder="Search products..."
        onChange={(event) => onKeywordChange(event.target.value)}
        className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-black placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none"
      />
    </div>
  );
}
