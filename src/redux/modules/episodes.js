import { LOAD_PODCAST } from './podcasts';

const reducer = (state = [], action) => {
  if(action.type === LOAD_PODCAST) return [
    ...state,
    ...action.episodes
  ]

  return state;
}

export default reducer;
