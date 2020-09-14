import { fetchTopStories } from '../api'

export const getTopStories = () => {
  return fetchTopStories().then(stories => ({ stories }))
}
