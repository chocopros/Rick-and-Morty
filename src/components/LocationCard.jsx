import React from 'react'

const LocationCard = ({location}) => {

  console.log(location)
  
  return (
    <article className='location-card'>
        <h1>{location?.name}</h1>
        <ul>
            <li><span>Type: </span>{location?.type}</li>
            <li><span>Dimension: </span> {location?.dimension}</li>
            <li><span>Populations: </span> {location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationCard