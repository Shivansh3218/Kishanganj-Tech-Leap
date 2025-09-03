import React, { useEffect } from 'react'

function BasicApiCall() {

  const [data, setData] = React.useState(null)
  const [userId, setUserId] = React.useState(1)

  useEffect(() => {
    console.log("component did mount")
  }, [])



  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:4000/users/${userId}`)
      const json = await response.json()
      console.log(json)
      setData(json)
    }
    fetchData()

    console.log("component did update for user id", userId)
  }, [userId])




  useEffect(()=>{console.log("it will run after every render")})

  return (
    <div>

      <h1>This is the basic api call component</h1>
      <h1>{data?.first_name}</h1>
      <button onClick={() => setUserId(userId + 1)}>Increase</button>

    </div>
  )
}

export default BasicApiCall