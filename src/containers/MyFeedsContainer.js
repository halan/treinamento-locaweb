import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MyFeeds from '../components/Stage/MyFeeds';
import { getPodcasts, getSelectedIndexPodcast } from '../selectors';
import { selectPodcast } from '../redux/modules/ui';
import { fetchPodcast } from '../redux/modules/podcasts';

const MyFeedsContainer = connect(
  state => ({
    podcasts: getPodcasts(state),
    selected: getSelectedIndexPodcast(state)
  }),
  dispatch => bindActionCreators({ selectPodcast, fetchPodcast }, dispatch)
)(MyFeeds);

export default MyFeedsContainer;
