import { startApp } from './init'
import { getTopStories } from './posts'

export default (sam) => {
  const {
    intents: [
      iStartApp,
      iGetTopStories
    ]
  } = sam.getIntents([startApp, getTopStories])

  return {
    iStartApp,
    iGetTopStories
  }
}
