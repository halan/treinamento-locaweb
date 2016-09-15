import { getPodcast } from '../../api';

export const LOAD_PODCAST = 'podcasts/LOAD_PODCAST';
const ERRORED_PODCAST = 'podcasts/ERRORED_PODCAST';


const reducer = (state = [], action) => {
  if(action.type === LOAD_PODCAST) return [
    ...state,
    action.podcast
  ]

  return state;
}

const mapPodcast = ({ feed: { title, link, author, description, image }}) => ({
  id: link,
  title,
  author,
  cover: image,
  description
});

const mapEpisodes = (data) => (
  data.items.map(({ guid, title, enclosure, type}) => ({
    id: guid,
    podcastId: data.feed.link,
    title,
    source: enclosure.link,
    type
  }))
);

export const loadPodcast = (data) => ({
  type: LOAD_PODCAST,
  podcast: mapPodcast(data),
  episodes: mapEpisodes(data)
});

export const erroredPodcast = (data) => ({
  type: ERRORED_PODCAST,
  data: data
})

export const fetchPodcast = urlFeed => dispatch =>
  getPodcast(urlFeed).then(
    response => dispatch(loadPodcast(response.data)),
    error => dispatch(erroredPodcast(error))
  )

export default reducer;
