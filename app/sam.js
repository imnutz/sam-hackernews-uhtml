import { api, createInstance } from 'sam-pattern'
import initialState from './initialState'

import setupActions from './actions'
import setupNAPs from './naps'

import posts from './components/posts'

export const sam  = api(createInstance())

sam.addComponent(posts)

sam.addInitialState(initialState)

export const intents = setupActions(sam)
setupNAPs(sam, intents)
