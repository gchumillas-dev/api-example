// NOTE: is this file more Secure, Refactorable or Readable?
//
// And if not, why using TypeScript?
import { useCallback } from 'react'
import { createStore } from 'redux'
import { useSelector, useDispatch } from 'react-redux'

// NOTE: Is this type really a User?
//
// Or it is just a fragment of arbitrary data?
// Maybe TypeScript is promoting the use of "premature abstractions".
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

// NOTE: Is this type really worth?
//
// I have seen projects with hundreds of types
// only to fulfill the TypeScript compiler.
type State = {
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
  const users = useSelector<State, User[]>(state => state.users)
  const setUsers = useCallback((payload: User[]) => dispatch<SetUsersAction>({ type: 'SET_USERS', payload }), [dispatch])

  return { users, setUsers }
}

export const useTypes = () => {
  const dispatch = useDispatch()
  const types = useSelector<State, Type[]>(state => state.types)
  const setTypes = useCallback((payload: Type[]) => dispatch<SetTypesAction>({ type: 'SET_TYPES', payload }), [dispatch])

  return { types, setTypes }
}

const initState: State = {
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
