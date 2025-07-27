import { useState, useCallback } from 'react';

import { GifSearch } from './components/GifSearch/GifSearch.jsx';
import { GifList } from './components/GifList/GifList.jsx';

import './App.css';

export const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [gifs, setGifs] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const apiKey = "xDpY0tKaj01CqTEe1eEWcKCCxypoRuOq";
  const apiUrl = "https://api.giphy.com/v1/gifs/search";

  const handleInputChange = useCallback((value) => {
    setSearchValue(value);
  }, [setSearchValue]);

   const handleSearch = useCallback(async () => {
    if (!searchValue.trim()) return;

    try {
      const response = await fetch(
        `${apiUrl}?api_key=${apiKey}&q=${encodeURIComponent(searchValue)}&limit=20`
      );
      const data = await response.json();

      setGifs(data.data);
      setHasSearched(true);
    } catch (error) {
      console.error(error);

      setGifs([]);
      setHasSearched(true);
    }
  }, [searchValue]);

  return (
    <>
      <GifSearch 
        value={searchValue} 
        onInputChange={handleInputChange} 
        onSearch={handleSearch} 
      />
      <GifList gifs={gifs} hasSearched={hasSearched} />
    </>
  );
};