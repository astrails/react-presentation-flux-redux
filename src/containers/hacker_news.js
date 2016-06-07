import { fetch } from 'reduxx/actions/hacker_news';
import HackerNews from 'components/hacker_news';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetch())
});

const mapStateToProps = (state) => {
  const { news, newsIds } = state.hackerNews;
  const hackerNews = newsIds.map(id => ({ ...news[id], id }));
  return { hackerNews };
};

export default connect(mapStateToProps, mapDispatchToProps)(HackerNews);

