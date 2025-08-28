import React from 'react'

function Profile({name, email, age}) {
  return (
    <div>
      
      <h1>This is the profile component</h1>
      <h1>{name }</h1>

      <h1>{email}</h1>

      <h1>{age}</h1>
    </div>
  )
}

export default Profile