import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ThePodcast from '../components/Stage/ThePodcast';
import { getSelectedFullPodcast } from '../selectors'
import { selectEpisode } from '../redux/modules/ui';

const ThePodcastContainer = connect(
  state => getSelectedFullPodcast(state),
  dispatch => bindActionCreators({ selectEpisode }, dispatch)
)(ThePodcast);

export default ThePodcastContainer;
