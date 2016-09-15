import { connect } from 'react-redux';
import Player from '../components/Player';
import { getSelectedEpisode } from '../selectors'

const PlayerContainer = connect(
  state => getSelectedEpisode(state) || {}
)(Player);

export default PlayerContainer;
