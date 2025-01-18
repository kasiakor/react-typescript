import React from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  placeholder: string;
  // onSearchChange: ChangeEventHandler<HTMLInputElement>;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBox = ({ placeholder, onSearchChange }: SearchBoxProps) => (
  <input
    className="search-box"
    type="search"
    placeholder={placeholder}
    onChange={onSearchChange}
  />
);
