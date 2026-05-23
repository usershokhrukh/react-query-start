import React from 'react'
import { useGetUsers } from './features/useUsersGet'

const App = () => {
  const {data} = useGetUsers()
  console.log(data);
  
  return (
    <div>
      {
        JSON.stringify(data.slice(0,10))
      }
    </div>
  )
}

export default App