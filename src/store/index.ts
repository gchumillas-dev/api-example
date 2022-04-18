import { useCallback } from 'react'
import { createStore } from 'redux'
import { useSelector, useDispatch } from 'react-redux'

export type User = {
  id: string
  firstName: string
  lastName: string
  age: number
  email: string
  profession: string
}

export type Type = {
  id: string,
  name: string
}

type InitState = {
  users: User[]
  types: Type[]
}

type SetUsersAction = {
  type: 'SET_USERS'
  payload: User[]
}

type SetTypesAction = {
  type: 'SET_TYPES'
  payload: Type[]
}

type Action = SetUsersAction | SetTypesAction

export const useUsers = () => {
  const dispatch = useDispatch()
  const users = useSelector<InitState, User[]>(state => state.users)
  const setUsers = useCallback((payload: User[]) => dispatch<SetUsersAction>({ type: 'SET_USERS', payload }), [dispatch])

  return { users, setUsers }
}

export const useTypes = () => {
  const dispatch = useDispatch()
  const types = useSelector<InitState, Type[]>(state => state.types)
  const setTypes = useCallback((payload: Type[]) => dispatch<SetTypesAction>({ type: 'SET_TYPES', payload }), [dispatch])

  return { types, setTypes }
}

const initState: InitState = {
  users: [],
  types: []
}

const reducer = (state = initState, action: Action) => {
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
