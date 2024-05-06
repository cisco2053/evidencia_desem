
import React, { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';
import mick from './assets/img/mick.jpg'

const ArtistList = ({ searchTerm }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    
    const artistsData = [
      { id: 1, name : 'Mick Jagger (The Rolling Stones) '},
      { id: 2, name: 'Stevie Nicks (Fleetwood Mac)' },
      { id: 3, name: 'Freddie Mercury (Queen)' },
      { id: 4, name: 'Robert Plant (Led Zeppelin)'},
    ];



    setArtists(artistsData);
    
  }, [searchTerm]);

  return (
    <div className='artistas'>
      <h2>Artistas</h2>
      {artists.map(artist => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
}

export default ArtistList;

