import { createSelector } from 'reselect';

export const getPodcasts = s => s.podcasts;

export const getEpisodes = s => s.episodes;

export const getPodcastId = (_, { podcastId }) => podcastId;

export const getEpisodeId = (_, { episodeId}) => episodeId;

export const getSelectedPodcastId = s => s.ui.podcastSelected;

export const getSelectedEpisodeId = s => s.ui.episodeSelected;


export const find = (all, id) => all.find( one => one.id === id );

export const findIndex = (all, one) => all.indexOf( one )

export const filterBy = field => (all, value) => all.filter( one => one[field] === value)

export const findEpisode = (episodes, podcastId, episodeId) =>
  episodes.find( e => e.id === episodeId && e.podcastId === podcastId )

export const mountFullPodcast = (podcast, episodes) => ({ ...podcast, episodes })


export const getPodcastById = createSelector([ getPodcasts, getPodcastId ], find);

export const getPodcastIndexById = createSelector([ getPodcasts, getPodcastById ], findIndex);

export const getSelectedPodcast = createSelector([ getPodcasts, getSelectedPodcastId ], find);

export const getSelectedIndexPodcast = createSelector([ getPodcasts, getSelectedPodcast ], findIndex)

export const getEpisodesByPodcastId = createSelector([ getEpisodes, getPodcastId ], filterBy('podcastId'));

export const getEpisodesBySelectedPodcast = createSelector([ getEpisodes, getSelectedPodcastId ], filterBy('podcastId'))

export const getFullPodcastById = createSelector([ getPodcastById, getEpisodesByPodcastId ], mountFullPodcast);

export const getSelectedFullPodcast = createSelector([ getSelectedPodcast, getEpisodesBySelectedPodcast ], mountFullPodcast)

export const getEpisodeByIds = createSelector([ getEpisodes, getPodcastId, getEpisodeId ], findEpisode);

export const getSelectedEpisode = createSelector([ getEpisodes, getSelectedPodcastId, getSelectedEpisodeId], findEpisode)
