import React from 'react'

import Podcast from './Podcast'
import Feeds from './Feeds'
import Player from './Player'
import Stage from './Stage'

const App = ({ feeds, podcast, player }) => (
  <section id="podcasts-app">

    <Stage> 
      <Feeds {...feeds} />
      <Podcast {...podcast} />
    </Stage>

    <Player {...player} />

  </section>
)

export default App
