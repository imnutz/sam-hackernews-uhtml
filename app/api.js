const API_BASE = 'https://hacker-news.firebaseio.com'
const API_VERSION = 'v0'

const createEndpoint = (...resources) => {
  return [ API_BASE, API_VERSION].concat(resources).join('/')
}

export const fetchStory = (id) => {
  const endpoind = createEndpoint('item', [id, '.json'].join(''))

  return fetch(endpoind).then(res => res.json())
}

export const fetchTopStories = () => {
  const endpoind = createEndpoint('topstories.json?limitToFirst=30&orderBy="$key"')
  return fetch(endpoind)
    .then(res => res.json())
    .then(data => {
      const promises = data.map(fetchStory)

      return Promise.all(promises)
    })
}
