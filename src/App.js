import React from 'react'

import Podcast from './Podcast'
import Feeds from './Feeds'
import Player from './Player'

const App = () => (
  <section id="podcasts-app">

    <section id="stage"> 
      <Feeds />
      <Podcast />
    </section>

    <Player />

  </section>
)

export default App
