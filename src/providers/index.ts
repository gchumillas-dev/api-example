import { useEffect, useCallback } from 'react';
import { Request } from '../libs/request'
import * as store from '../store'

export const useUsers = (request: Request) => {
  // NOTE: Stale While Revalidate (STR).
  // We use the stored users before requesting new data.
  const { users, setUsers } = store.useUsers()

  const loadUsers = useCallback(async () => {
    const users = await request('http://localhost:3001/users')
    // const users = await response.json()
    setUsers(users)
  }, [setUsers, request])

  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  // NOTE: we also return loadUsers(), so we can refresh the data at any time.
  return { users, loadUsers }
}

export const useTypes = (request: Request) => {
  const { types, setTypes } = store.useTypes()

  const loadTypes = useCallback(async () => {
    const types = await request('http://localhost:3001/types')
    // const types = await response.json()
    setTypes(types)
  }, [setTypes, request])

  useEffect(() => {
    // NOTE: types isn't suppossed to change very often, so we load them once
    if (!types.length) {
      loadTypes()
    }
  }, [types.length, loadTypes])

  return { types, loadTypes }
}
