import React, { useState, useContext, } from 'react'
import { Formik, Form, } from 'formik'
import { SearchAndBuyContext, } from '../../../../../Context'
import AutoCompleteSearch from './AutoCompleteSearch'
import axios from 'axios'

const Search = () => {
  const { setStock, } = useContext(SearchAndBuyContext)
  const onSubmit = async (values) => {
    try {
      const { data, } = await axios.get(`/api/stock/${values.ticker}`)
      setStock(data)
    } catch (err) {
      console.log(err)
    }
  }
  const [ suggestions, setSuggestions, ] = useState([])

  return (
    <Formik initialValues={{ ticker: '', }} onSubmit={onSubmit}>
      {props => <Form >
        <AutoCompleteSearch suggestions={suggestions} setSuggestions={setSuggestions} {...props} />
        <button type='submit'>Search</button>
      </Form>}
    </Formik>
  )
}

export default Search
