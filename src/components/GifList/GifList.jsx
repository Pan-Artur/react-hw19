import { memo } from 'react';

import { StyledGifList } from "./StyledGifList";

export const GifList = memo(({ gifs, hasSearched }) => {
  return (
    <StyledGifList>
      {gifs.length > 0 ? (
        gifs.map((gif) => (
          <li key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </li>
        ))
      ) : (
        !hasSearched && <p>Немає знайдених GIF-файлів</p>
      )}
    </StyledGifList>
  );
});