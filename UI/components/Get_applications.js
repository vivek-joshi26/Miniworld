import React, { useEffect, useState } from 'react'

const Get_applications = () => {
    const url = "https://jsonplaceholder.typicode.com/users"

    const [users, setUsers] = useState([])

    const fetchUserData = () => {
      fetch(url)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }
  
    useEffect(() => {
      fetchUserData()
    }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (<li key={user.id}>{user.userId}</li>
          ))}
          {users.map(user => (<li key={user.id}>{user.scholarshipId}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Get_applications