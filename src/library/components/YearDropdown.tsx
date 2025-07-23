import { YearDropdownProps } from "../types";
import Dropdown from "./Dropdown";

export default function YearSelector({ year, setYear }: YearDropdownProps) {
  const currentYear = new Date().getFullYear();
  const years = [
    "All Years",
    ...Array.from(
      { length: currentYear - 1950 + 1 },
      (_, i) => `${currentYear - i}`,
    ),
  ];

  return (
    <Dropdown
      options={years}
      value={year}
      setValue={setYear}
      placeholder="All Years"
    />
  );
}
