import React from 'react'
import EpisodeList from './EpisodeList'
import Episode from './Episode'

const Podcast = ( { cover, title, author, description, episodes } ) => (
  <section id="the-podcast">

    <header>
      <img className="cover" src={ cover } />
      <div>
        <h1>{ title }</h1>
        <h2>{ author }</h2>
        <p>{ description }</p>
      </div>
    </header>

    <EpisodeList>
    { episodes.map( ({ title }, i) => <Episode key={i}>{ title }</Episode> ) }
    </EpisodeList>

  </section>
)

export default Podcast
