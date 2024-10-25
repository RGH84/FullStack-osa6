import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteQuery from './components/AnecdoteQuery'

const App = () => {
  const anecdotes = AnecdoteQuery()

  if ( anecdotes.isLoading ) {
    return <div>loading data...</div>
  }

  if (anecdotes.isError) {
    return <div>anecdote service not available due to problems in server</div>
  }

  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      <AnecdoteList anecdotes={anecdotes} />
    </div>
  )
}

export default App
