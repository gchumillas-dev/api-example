import { useUsers } from './providers'

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
