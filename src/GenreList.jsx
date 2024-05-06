import React from 'react';

const GenreList = () => {
  
    const genres = ['Rock', 'Pop', 'Hip Hop', 'Jazz'];
  
  
  return (
    <div className = 'genero'>
      <h2> Géneros </h2>
      <ul>
        {genres.map(genre => (
          <li key = {genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default GenreList;

