import axios from 'axios';
import React, { useEffect, useState } from 'react'


const instance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

const Available_scholarships = () => {
  const url = "/scholarships?page=2&limit=6"

  const [users, setUsers] = useState([])

  const fetchUserData = () => {
   instance.get(url)
   .then((res)=>{
    console.log(res)
    setUsers(res.data.results)
   })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (

    <div>
      {users.length > 0 && (
        <ul>
          {/* {users.map(user => (<li key={user.id}>{user.creatorId}</li>
          ))}
          {users.map(user => (<li key={user.id}>{user.name}</li>
          ))}
          {users.map(user => (<li key={user.id}>{user.description}</li>
          ))}
          {users.map(user => (<li key={user.id}>{user.university}</li>
          ))}
          {users.map(user => (<li key={user.id}>{user.program}</li>
          ))}
          {users.map(user => (<li key={user.id}>{user.scholarshipAmount}</li>
          ))} */}

          {users.map(user=>(
            <>
              <li key={user.id}>{user.creatorId}</li>
              <li key={user.id}>{user.name}</li>
              <li key={user.id}>{user.description}</li>
              <li key={user.id}>{user.university}</li>
              <li key={user.id}>{user.program}</li>
              <li key={user.id}>{user.scholarshipAmount}</li>
              <br/>
            </>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Available_scholarships