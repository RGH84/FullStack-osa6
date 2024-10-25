import { useQuery } from '@tanstack/react-query'
import { getAnecdotes } from '../requests'

const AnecdoteQuery = () => {
  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 1
  })
  return result
}

export default AnecdoteQuery
