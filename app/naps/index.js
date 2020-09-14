export default (sam, intents) => {
  const firstFetch = (model) => _ => {
    if (model.firstRun) {
      intents.iGetTopStories()
      model.firstRun = false
    }

    return false
  }

  sam.addNAPs([ firstFetch ])
}
