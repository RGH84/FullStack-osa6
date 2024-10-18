import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

    const ok = () => {
      store.dispatch({
        type: 'OK'
      })
    }

    const bad = () => {
      store.dispatch({
        type: 'BAD'
      })
    }

    const reset = () => {
      store.dispatch({
        type: 'ZERO'
      })
    }

    return (
      <div>
        <button onClick={good} style={{ backgroundColor: 'green', color: 'white' }}>good</button>
        <button onClick={ok} style={{ backgroundColor: 'orange', color: 'white' }}>ok</button>
        <button onClick={bad} style={{ backgroundColor: 'red', color: 'white' }}>bad</button>
        <button onClick={reset} style={{ backgroundColor: 'gray', color: 'white' }}>reset stats</button>
        <div style={{ color: 'green' }}>good {store.getState().good}</div>
        <div style={{ color: 'orange' }}>ok {store.getState().ok}</div>
        <div style={{ color: 'red' }}>bad {store.getState().bad}</div>
      </div>
    )
  }

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
