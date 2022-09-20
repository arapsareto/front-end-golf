import React from 'react'

const golfItem = ({course}) => {
    const {location, name}=course
  return (
    <div>

    <p>{location}</p>
    <p>{name}</p>
    </div>
  )
}

export default golfItem