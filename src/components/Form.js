import React, { useState } from 'react'

const Form = ({ searchData }) => {
  const [search, setSearch] = useState({
    city: '',
    country: ''
  })

  const handleChange = event => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value
    })
  }

  const getWeather = event => {
    event.preventDefault()
    searchData(search)
  }

  return (
    <form className='mx-auto mt-5'>
      <div className='row'>
        <div className='col mb-2'>
          <h1 className='text-center font-weight-bold text-secondary'>Weather Finder</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 mt-3'>
          <input
            className='form-control form-control-sm'
            id='city'
            name='city'
            onChange={handleChange}
            placeholder='City'
            type='text'
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-12 mt-3'>
          <input
            className='form-control form-control-sm'
            id='country'
            name='country'
            onChange={handleChange}
            placeholder='Country'
            type='text'
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-12 mt-3'>
          <button
            className='btn btn-dark btn-block'
            onClick={getWeather}
            type='button'
          >
            Search
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
