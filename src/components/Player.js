import React from 'react'

const Player = ({ title, source, sourceType }) => (
  <footer id="player">
    <h3>{ title }</h3>

    <audio controls>
      <source src={ source } type={ sourceType } />
      Your browser does not support the audio element.
    </audio>

  </footer>
)

export default Player
