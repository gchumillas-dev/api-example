import { useEffect } from 'react';
// TODO: (all) replace single quote by double quote
import { getUsers } from './providers/users';
import * as store from './store'

const useUsers = () => {
  const [users, setUsers] = store.useUsers()
  const loadUsers = async () => {
    const users = await getUsers()
    setUsers(users)
  }

  useEffect(() => {
    if (!users.length) {
      loadUsers()
    }
  }, [])

  return { users, loadUsers }
}

function App() {
  const { users, loadUsers } = useUsers()

  return (
    <div>
      {users.length}
    </div>
  );
}

export default App;
