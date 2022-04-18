import { useTypes, useUsers } from './providers'
import './App.css'

function App() {
  const { types } = useTypes()
  const { users, loadUsers } = useUsers()

  return (
    <div className="table">
      <div className="header">
        <select>
          <option>Select an option</option>
          {types.map(type => (
            <option key={type.id}>{type.name}</option>
          ))}
        </select>
        <button onClick={loadUsers}>refresh</button>
      </div>
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