import { configureStore } from '@reduxjs/toolkit'

import anecdotesReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'

anecdoteService.getAll().then(anecdotes =>
    store.dispatch(setAnecdotes(anecdotes))
)

const store = configureStore({
  reducer: {
    anecdotes: anecdotesReducer,
    filter: filterReducer,
    notification: notificationReducer
  }
})

console.log(store.getState())

export default store
