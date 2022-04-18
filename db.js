const casual = require('casual')

module.exports = () => {
  const data = {
    users: [],
    types: [],
  }

  for (let i = 0; i < 20; i++) {
    data.users.push({
      id: i,
      firstName: casual.first_name,
      lastName: casual.last_name,
      age: casual.integer(21, 68),
      email: casual.email,
      profession: casual.title
    })
  }

  for (let i = 0; i < 3; i++) {
    data.types.push({
      id: i,
      name: `Type ${i}`
    })
  }

  return data
}
