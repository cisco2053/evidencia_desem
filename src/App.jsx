
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ArtistList from './ArtistList';
import GenreList from './GenreList';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='inicio'>
      <div className='inicio1'>
        <h1><em> SOUNDWAVE </em></h1>
        <h2><i> Explorador de musica. </i></h2>
        <h3> Aca encontraras informacion sobre tus artirtas favoritos y los generos que mas gustan. </h3>
      </div>
      <SearchBar setSearchTerm = {setSearchTerm} />
      <div className='inicio2'>
        <ArtistList searchTerm = {searchTerm} />
        <GenreList />
      </div>
    </div>
  );
}

export default App;


