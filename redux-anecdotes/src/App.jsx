import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'


const App = () => {
  return (
    <div>
      <Filter />
      <AnecdoteList />
      <NewAnecdote />
    </div>
  )
}

export default App