import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import data from './data'
import { getFeeds, getFullPodcast, getEpisode } from './selectors'

const state = {
  selectedPodcast: '01',
  selectedEpisode: '100'
}

const props = {
  feeds: { covers: getFeeds( data ) },
  podcast: getFullPodcast( data, state.selectedPodcast ),
  player: getEpisode( data, state.selectedPodcast, state.selectedEpisode ),
}

render(<App {...props} />, document.getElementById('podcast-player'))
