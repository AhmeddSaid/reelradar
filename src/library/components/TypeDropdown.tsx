import { TypeDropdownProps } from "../types";
import Dropdown from "./Dropdown";

export default function TypeDropdown({ type, setType }: TypeDropdownProps) {
  return (
    <Dropdown
      value={type}
      setValue={setType}
      options={["All Types", "movie", "series", "episode"]}
      placeholder="All Types"
    />
  );
}
