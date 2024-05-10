import React from 'react'

function userCard({user}) {
  return (
    <div className="user-card">
    <img src={user.profilePicture} alt={user.username} />
    <div className="user-info">
      <h3>{user.username}</h3>
      <p>Last Message: {user.lastMessage}</p>
    </div>
  </div>
  )
}

export default userCard