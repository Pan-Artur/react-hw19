import { memo, useCallback } from 'react';

import { StyledGifSearch } from "./StyledGifSearch";

export const GifSearch = memo(({ value, onInputChange, onSearch }) => {
  const handleInputChange = useCallback((e) => {
    onInputChange(e.target.value);
  }, [onInputChange]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  }, [onSearch]);

  return (
    <StyledGifSearch>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button type="button" onClick={onSearch}>
        Пошук
      </button>
    </StyledGifSearch>
  );
});