import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNotificationDispatch } from '../NotificationContext'
import { voteAnecdote } from '../requests'
import AnecdoteQuery from './AnecdoteQuery'

const AnecdoteList = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const voteAnecdoteMutation = useMutation({ 
    mutationFn: voteAnecdote,
    onSuccess: (updatedAnecdote) => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    
      dispatch({ type: 'SHOW', payload: `you voted '${updatedAnecdote.content}'` })
        setTimeout(() => {
          dispatch({ type: 'HIDE' })
      }, 5000)
    }
  })

  const handleVote = (anecdote) => { 
    voteAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1 })
  }

  const result = AnecdoteQuery()

  const anecdotes = result.data

  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList