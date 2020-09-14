export default {
  acceptors: [
    // handle errors
    (model) => _ => {
      if (model.hasError())
        throw new Error(model.error())
    },

    (model) => ({ stories = [] }) => {
      model.stories = stories

      return model
    }
  ]
}
