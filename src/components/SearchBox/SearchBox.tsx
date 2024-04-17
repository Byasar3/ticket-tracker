import React, { FormEventHandler } from "react";

type SearchBoxProps = {
  placeholder: string;
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};
const SearchBox = ({
  placeholder,
  searchTerm,
  handleInput,
}: SearchBoxProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onInput={handleInput}
      />
    </div>
  );
};

export default SearchBox;
