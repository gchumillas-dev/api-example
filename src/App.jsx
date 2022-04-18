import { useUsers } from './providers'

function App() {
  const { users, loadUsers } = useUsers()

  return (
    <div>
      <p>
        <button onClick={loadUsers}>reload</button>
      </p>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Profession</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.profession}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
