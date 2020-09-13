import { html, render } from 'uhtml'
import { intents, sam } from './sam'
import theme from './theme'

const renderer = (model) => {
  const representation = theme(model, intents)
  render(document.body, html`${representation}`)
}

sam.setRender(renderer)

intents.fetchTopStories()
