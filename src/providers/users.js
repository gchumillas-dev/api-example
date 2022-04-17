export const getUsers = async () => {
  // TODO: (all) use semicolons
  const res = await fetch('http://localhost:3001/users')

  return await res.json()
}
