import { createStore } from 'redux'

const initState = {
  users: []
}

const reducer = (state = initState, action) => {
  if (action.type === 'SET_USERS') {
    return {
      ...state,
      users: action.payload
    }
  }

  return state
}

export const store = createStore(reducer, initState)
export { useUsers } from './users'
