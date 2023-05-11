import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const Search = () => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  const showInput = (e) => {
    e.preventDefault();
    setSearch(!search);
  };
  return (
    <form className="search">
      <SearchIcon width="2rem" onClick={showInput} />
      {search && (
        <input
          type="search"
          placeholder="Search for name..."
          value={value}
          name="q"
          className="search__input"
          spellCheck="false"
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </form>
  );
};
