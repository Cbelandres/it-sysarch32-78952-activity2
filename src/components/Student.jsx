import React from 'react'


function Student({student:{image,name,email}}) {
  return (
    <div className="card">
    <img className="card-image" src={image} alt="profile picture"></img>
    <h2 className="card-title">{name}</h2>
    <p className="card-text">{email}</p>
</div> 
  )
}

export default Student