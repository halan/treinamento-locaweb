import React from 'react';

const ThePodcast = ({ cover, title, autor, episodes = [], description, selectEpisode }) => (
  <section id="the-podcast">
    <header>
      <img className="cover" src={ cover } />
      <div>
        <h1>{ title }</h1>
        <h2>{ autor }</h2>
        <p>{ description }</p>
      </div>
    </header>

    <ul id="podcast-episodes">
    { episodes.map((episode, i) => (
      <li key={i}>
        <h3>{ episode.title }</h3>
        <button onClick={ e => selectEpisode(episode.id) } >►</button>
      </li>
    )) }
    </ul>
  </section>
);

export default ThePodcast;
