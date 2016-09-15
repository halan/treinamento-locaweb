const getPodcast = ( data, podcastId ) => (
  data.podcasts.find( podcast => podcast.id === podcastId )
)

const getEpisodes = ( data, podcastId ) => (
  data.episodes.filter( episode => episode.podcastId === podcastId )
)

const getFeeds = data => data.podcasts.map( podcast => podcast.cover )


const getEpisode = ( data, podcastId, episodeId ) => (
  data.episodes.find( episode => episode.id === episodeId && episode.podcastId === podcastId )
)

const getFullPodcast = ( data, podcastId ) => ({
  ...getPodcast( data, podcastId ),
  episodes: getEpisodes( data, podcastId )
})

export { getFeeds, getEpisode, getFullPodcast }
