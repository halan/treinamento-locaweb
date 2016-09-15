import React from 'react';

const Player = ({ title, source, type }) => (
  <footer id="player">
    <h3>{ title }</h3>
    <audio controls={true} >
      <source src={ source } type={ type } />
      Your browser does not support the audio element.
    </audio>
  </footer>
);

export default Player;
