import React from 'react'

export const Restaurant = ({name, adress, tel}) => {
  return (
    <div className="adress_container">
      <h4>{name}</h4>
      <p>{adress}</p>
      <p>{tel}</p>
     </div>
  )
}
