import Navigo from 'navigo'

export default (intents) => {
  const navigo = new Navigo(null, true, '#!')

  navigo.hooks({
    before: (done) => {
      intents.iFetchingStories()
      done()
    }
  })

  navigo
    .on('/', intents.iGetTopStories)
    .on('/top', intents.iGetTopStories)
    .on('/new', intents.iGetNewStories)
    .on('/show', intents.iGetShowStories)
    .on('/ask', intents.iGetAskStories)
    .on('/jobs', intents.iGetJobStories)
    .resolve()
}
