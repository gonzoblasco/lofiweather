import React from 'react'

const Weather = ({ result }) => {
  const { name, main } = result.data

  if (!name) return null

  const kelvin = 273.15

  return (
    <div>
      <h2>Location</h2>
      <p>{name}</p>
      <h2>Temperature</h2>
      <p>{parseInt(main.temp - kelvin)}<span>&#x2103;</span></p>
      <h2>Humidity</h2>
      <p>{parseInt(main.humidity)}<span>%</span></p>
    </div>
  )
}

export default Weather
