import React, { useState, useContext, } from 'react'
import { Formik, Form, } from 'formik'
import alpha from '../../../../alphaVantage'
import { SearchAndBuyContext, } from '../../../../Context'
import AutoCompleteSearch from './AutoCompleteSearch'

const Search = () => {
  const { setStock, } = useContext(SearchAndBuyContext)
  const onSubmit = async (values) => {
    try {
      const { data, } = alpha.util.polish(await alpha.data.quote(values.ticker))
      setStock(data)
      console.log('data:', data)
    } catch (err) {
      console.log(err)
    }
  }
  const [ suggestions, setSuggestions, ] = useState([])

  console.log('suggestions:', suggestions)
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
