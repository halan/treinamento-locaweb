import React from 'react';

import Stage from './Stage';
import MyFeedsContainer from '../containers/MyFeedsContainer';
import ThePodcastContainer from '../containers/ThePodcastContainer';

import PlayerContainer from '../containers/PlayerContainer';

const App = () => (
  <section id="podcasts-app">
    <Stage>
      <MyFeedsContainer />

      <ThePodcastContainer />
    </Stage>

    <PlayerContainer />
  </section>
);

export default App;
