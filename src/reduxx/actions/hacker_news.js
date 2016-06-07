import Constants from 'constants/app';
import RemoteApi from 'api/remote_api';

const topIdsLoaded = (ids) => ({ type: Constants.HackerNews.TOP_IDS_LOADED, ids });

const storyFetched = (id, data) => ({ type: Constants.HackerNews.STORY_FETCHED, id, data });

export const fetch = () => (dispatch) => {
  RemoteApi.fetchTopStories({
    onSuccess: (topStoryIds) => {
      const limitedIds = topStoryIds.slice(0, 10);
      dispatch(topIdsLoaded(limitedIds));
      limitedIds.forEach(id => RemoteApi.fetchStory({
        payload: { id },
        onSuccess: (data) => {
          dispatch(storyFetched(id, data));
        }
        // TODO: onFailure
      }));
    }
    // TODO: onFailure
  });
};
