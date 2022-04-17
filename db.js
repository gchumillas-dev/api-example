const casual = require('casual')

module.exports = () => {
  const data = { users: [] }
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    data.users.push({
      id: i,
      fistName: casual.first_name,
      lastName: casual.last_name,
      age: casual.integer(21, 68),
      email: casual.email,
      profession: casual.title
    })
  }
  return data
}
