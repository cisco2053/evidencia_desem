import React from 'react';
import mick from './assets/img/mick.jpg';
import stevie from './assets/img/stevie.jpg';

const ArtistCard = ({ artist }) => {
  return (
    <div className='card'>
      <h3>{artist.name}</h3>
     
    </div>
    

  );
}

export default ArtistCard;
