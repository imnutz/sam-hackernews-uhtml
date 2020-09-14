import { html } from 'uhtml'
import { timeAgo, host } from './utils'

const header = (appName, data) => {
  const menuKeys = Object.keys(data)
  return html`
    <div class="header">
      <h3>${appName}</h3>
      <ul>
        ${
          menuKeys.map(key => {
            return html.for(data[key], 'name')`
              <li><a href=${['#!', data[key].path].join('/')}>${data[key].name}</a></li>
            `
          })
        }
      </ul>
    </div>
  `
}

const getTitle = (post) => {
  if (!post.url) {
    return post.title
  } else {
    return html`<a href=${post.url}>${post.title}</a> <span>(${host(post.url)})</span>`
  }
}

const renderPosts = (posts = []) => {
  return html`
    <div class="posts">
      ${
        posts.map(post => {
          return html.for(post, 'id')`
            <div class="post">
              <h3>${getTitle(post)}</h3>
              <p class="info">
                <span>${post.score} points by ${post.by} ${timeAgo(post.time)} ago</span>|
                <span>${post.descendants || 0} comments</span>
              </p>
            </div>
          `
        })
      }
    </div>
  `
}

export default (state, intents) => {
  return html`
    <div class="app">
      ${header(state.appName, state.header)}
      ${state.fetching ? html`<span>loading...</span>` : renderPosts(state.stories)}
    </div>
  `
}
