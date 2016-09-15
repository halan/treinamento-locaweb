import { combineReducers } from 'redux';
import ui from './ui';
import podcasts from './podcasts';
import episodes from './episodes';

const reducer = combineReducers({
  ui,
  podcasts,
  episodes
});

export default reducer;
