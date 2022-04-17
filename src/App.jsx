import { useEffect, useCallback } from 'react';
// TODO: (all) replace single quote by double quote
import { getUsers } from './providers/users';
import * as store from './store'

const useUsers = () => {
  const [users, setUsers] = store.useUsers()
  const loadUsers = useCallback(async () => setUsers(await getUsers()), [setUsers])

  useEffect(() => {
    if (!users.length) {
      loadUsers()
    }
  }, [users.length, loadUsers])

  return { users, loadUsers }
}

function App() {
  const { users, loadUsers } = useUsers()

  return (
    <div>
      {users.length}
      <button onClick={loadUsers}>reload</button>
    </div>
  );
}

export default App;
