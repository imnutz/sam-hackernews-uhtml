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
              <li><a href=${data[key].path}>${data[key].name}</a></li>
            `
          })
        }
      </ul>
    </div>
  `
}

const renderPosts = (posts = []) => {
  return html`
    <div class="posts">
      ${
        posts.map(post => {
          return html.for(post, 'id')`
            <div class="post">
              <h3> <a href=${post.url}>${post.title}</a> <span>(${host(post.url)})</span></h3>
              <p class="info">
                <span>${post.score} points by ${post.by} ${timeAgo(post.time)} ago</span>|
                <span>${post.descendants} comments</span>
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
      ${renderPosts(state.stories)}
    </div>
  `
}
