
import React, { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';
import stevie from './assets/img/stevie.jpg';
import mick from './assets/img/mick.png';


const ArtistList = ({ searchTerm }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    
    const artistsData = [
      { id: 1, name : 'Mick Jagger (The Rolling Stones)', image: mick },
      { id: 2, name: 'Stevie Nicks (Fleetwood Mac)', image: stevie },
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

