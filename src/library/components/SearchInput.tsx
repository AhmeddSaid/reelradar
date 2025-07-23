import { Dispatch, SetStateAction } from "react";

export default function SearchInput({
  query,
  setQuery,
}: {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
      <div className="input-container flex w-full gap-2 rounded-2xl p-2">
        <input
          placeholder="Search Title..."
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </>
  );
}
