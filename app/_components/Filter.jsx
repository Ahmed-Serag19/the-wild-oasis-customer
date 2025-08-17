"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";
  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="border border-primary-800 flex">
      <Button
        handleFilter={handleFilter}
        filter="all"
        desc="All Cabins"
        activeFilter={activeFilter}
      />
      <Button
        handleFilter={handleFilter}
        filter="small"
        desc="1&mdash;3 guests"
        activeFilter={activeFilter}
      />
      <Button
        handleFilter={handleFilter}
        filter="medium"
        desc="3&mdash;7 guests"
        activeFilter={activeFilter}
      />
      <Button
        handleFilter={handleFilter}
        filter="large"
        desc="8&mdash;12 guests"
        activeFilter={activeFilter}
      />
    </div>
  );
};

const Button = ({ filter, handleFilter, activeFilter, desc }) => {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter ? "bg-primary-600 text-primary-50" : ""
      }`}
    >
      {desc}
    </button>
  );
};
export default Filter;
