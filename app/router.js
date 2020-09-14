import Navigo from 'navigo'

export default (sam, intents) => {
  const navigo = new Navigo(null, true, '#!')

  navigo
    .on(intents.iStartApp)
    .on('/top', () => {
      intents.iFetchingStories()
      intents.iGetTopStories()
    })
    .on('/new', () => {
      intents.iFetchingStories()
      intents.iGetNewStories()
    })
    .on('/show', () => {
      intents.iFetchingStories()
      intents.iGetShowStories()
    })
    .on('/ask', () => {
      intents.iFetchingStories()
      intents.iGetAskStories()
    })

    .on('/jobs', () => {
      intents.iFetchingStories()
      intents.iGetJobStories()
    })
    .resolve()
}
