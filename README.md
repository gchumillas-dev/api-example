This example illustrate the use of Hooks to comunicate with an API.

# Stale While Revalidate (SWR)

This prevents the user from seeing a "empty page" for a short period of time. But it is not always a good approach. For example, when opening a form we may not want to show the previous information.

```ts
// File: src/providers/index.ts
import * as store from '../store'

export const useUsers = (request: Request) => {
  // Stale While Revalidate (STR).
  // We use the stored users before requesting new data.
  const { users, setUsers } = store.useUsers()

  const loadUsers = useCallback(async () => {
    const users = await request('http://localhost:3001/users')
    setUsers(users)
  }, [setUsers, request])

  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  return { users, loadUsers }
}
```

# Cached data
```ts
// File: src/providers/index.ts
import * as store from '../store'

export const useTypes = (request: Request) => {
  const { types, setTypes } = store.useTypes()

  const loadTypes = useCallback(async () => {
    const types = await request('http://localhost:3001/types')
    setTypes(types)
  }, [setTypes, request])

  useEffect(() => {
    // Types are not supposed to change very often, so we load them once
    if (!types.length) {
      loadTypes()
    }
  }, [types.length, loadTypes])

  // However, we also return loadTypes(), so we can refresh the data at any time.
  return { types, loadTypes }
}
```

# Loading and Error status

Keeping the user informed of what's going on is very important.
That's why `useRequest` returns `loading` and `error`.

```ts
// File: src/App.tsx
const { request, loading, error } = useRequest()
const { types } = useTypes(request)
const { users, loadUsers } = useUsers(request)
// ...
```

# Start the app

First start the server
```bash
npm run server:start
```

and then start the app
```bash
npm start
```
