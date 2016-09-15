import { combineReducers } from 'redux';

const SELECT_PODCAST = 'ui/SELECT_PODCAST';
const SELECT_EPISODE = 'ui/SELECT_EPISODE';

const makeSelectorReducer = (actionType) => (
  (state = '', action) => {
    if(action.type === actionType) return action.id;

    return state;
  }
);

const podcastSelected = makeSelectorReducer(SELECT_PODCAST);
const episodeSelected = makeSelectorReducer(SELECT_EPISODE);

const reducer = combineReducers({
  podcastSelected,
  episodeSelected
});


export const selectPodcast = (id) => ({ type: SELECT_PODCAST, id });
export const selectEpisode = (id) => ({ type: SELECT_EPISODE, id });

export default reducer;
