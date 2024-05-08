import React from 'react';



const ArtistCard = ({ artist }) => {
  return (
    <main>
      <div className='card1'>
        <h3>{artist.name}</h3>
        <img src={artist.image} />
      </div>
    </main>
  );
}

export default ArtistCard;
