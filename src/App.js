import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import Error from './components/Error'
import Favorites from './components/Favorites'
import Form from './components/Form'
import Weather from './components/Weather'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

const App = () => {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  // const [error, setError] = useState(false)
  const [result, setResult] = useState({})
  const [favorites, setFavorites] = useState({})

  useEffect(() => {
    if (city === '') return

    const searchAPI = async () => {
      const appId = '06586291b796699f97ede861e94ca0a8'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
      const response = await axios.get(url)

      setResult(response)
    }

    searchAPI()
  }, [city, country])

  const searchData = data => {
    if (data.city === '' || data.country === '') {
      // setError(true)
      return
    }

    setCity(data.city)
    setCountry(data.country)
    // setError(false)
  }

  return (
    <Router>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            {(Object.keys(result).length === 0)
              ? <Form searchData={searchData} />
              : <Weather result={result} />
            }
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Link to={Favorites}>Go to my favorites</Link>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
