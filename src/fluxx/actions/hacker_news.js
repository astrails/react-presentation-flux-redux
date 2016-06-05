import Constants from 'constants/app';
import { handleServerAction } from 'fluxx/dispatcher';
import RemoteApi from 'api/remote_api';

export const fetch = () => {
  RemoteApi.fetchTopStories(topStoryIds => {
    const limitedIds = topStoryIds.slice(0, 10);
    handleServerAction({ type: Constants.HackerNews.TOP_IDS_LOADED, ids: limitedIds });
    limitedIds.forEach(id => RemoteApi.fetchStory(id));
  });
};

export const storyFetched = (id, data) => {
  handleServerAction({ type: Constants.HackerNews.STORY_FETCHED, id, data });
};
