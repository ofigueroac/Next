"use client";

export type SelectOption = {
  value: string;
  label: string;
};

export default function SelectField({
  label,
  name,
  value,
  options,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
}) {
  return (
    <fieldset className="mx-auto flex w-1/2 flex-wrap items-end gap-3 px-4 pt-4">
      <label className="flex flex-col gap-2 font-medium">
        {label}
        <div className="relative w-56">
          <select
            value={value}
            name={name}
            className="w-full cursor-pointer appearance-none rounded-md border border-zinc-300 bg-white py-2 pr-9 pl-3 text-black hover:border-zinc-500 focus:border-zinc-500 focus:outline-none"
            onChange={(event) => onChange(event.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-zinc-500"
          >
            <path d="M5.5 7.5 10 12l4.5-4.5z" />
          </svg>
        </div>
      </label>
    </fieldset>
  );
}
