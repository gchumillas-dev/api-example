import { useSelector, useDispatch } from 'react-redux'

export const useUsers = _ => {
  const dispatch = useDispatch()
  const users = useSelector(state => {
    return state.users
  })
  const setUsers = payload => dispatch({ type: 'SET_USERS', payload })

  return [users, setUsers]
}
