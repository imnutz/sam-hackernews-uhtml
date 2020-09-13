
import { fetchTopStories } from '../api'

export default {
  actions: [
    () => {
      return fetchTopStories().then(data => ({topStories: data}))
    }
  ],
  acceptors: [
    // handle errors
    (model) => _ => {
      if (model.hasError())
        throw new Error(model.error())
    },

    (model) => ({ topStories = [] }) => {
      model.stories = topStories
    }
  ]
}
