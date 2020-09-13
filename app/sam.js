import { api, createInstance } from 'sam-pattern'
import initialState from './initialState'
import posts from './components/posts'

export const sam  = api(createInstance())

sam.addInitialState(initialState)

const [
  fetchTopStories
] = sam.addComponent(posts).intents

export const intents = {
  fetchTopStories
}
