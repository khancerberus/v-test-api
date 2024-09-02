import { useEffect, useState } from 'react'

export const User = () => {
  const [user, setUser] = useState({ name: 'default', discordId: '' })

  useEffect(() => {
    fetch('http://localhost:3000/api/user.json')
      .then(res => res.json())
      .then(data => setUser(data))
    console.log('fetching user data')
  }, [])

  return (
    <div>
      <h1>User</h1>
      <p>Welcome to the user page!</p>

      <h2>User Info</h2>
      <p>Name: {user.name}</p>

      <p>Here is a list of users:</p>
      <ul>
          <li><a href="/user/1">User 1</a></li>
          <li><a href="/user/2">User 2</a></li>
          <li><a href="/user/3">User 3</a></li>
      </ul>
    </div>
  )
}