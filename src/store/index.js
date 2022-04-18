import { useCallback } from 'react'
import { createStore, useSelector, useDispatch } from 'redux'

export const useUsers = _ => {
  const dispatch = useDispatch()
  const users = useSelector(state => {
    return state.users
  })
  const setUsers = useCallback((payload) => dispatch({ type: 'SET_USERS', payload }), [dispatch])

  return { users, setUsers }
}

export const useTypes = _ => {
  const dispatch = useDispatch()
  const types = useSelector(state => {
    return state.types
  })
  const setTypes = useCallback((payload) => dispatch({ type: 'SET_TYPES', payload }), [dispatch])

  return { types, setTypes }
}

const initState = {
  users: [],
  types: []
}

const reducer = (state = initState, action) => {
  if (action.type === 'SET_USERS') {
    return {
      ...state,
      users: action.payload
    }
  } else if (action.type === 'SET_TYPES') {
    return {
      ...state,
      types: action.payload
    }
  }

  return state
}

export const store = createStore(reducer, initState)
