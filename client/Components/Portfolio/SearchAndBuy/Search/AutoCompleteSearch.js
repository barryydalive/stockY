import React from 'react'
import { useField, } from 'formik'
import debounce from '../../../../../utility/debounce'
import axios from 'axios'

const getData = async (search, setSuggestions) => {
  if (search) {
    const { data, } = await axios.get(`/api/search/${search}`)
    setSuggestions(data)
  } else {
    setSuggestions([])
  }
}
const debouncedData = debounce(getData, 500)

const AutoCompleteSearch = ({ suggestions, setSuggestions, ...props } ) => {
  const [ field, , helpers, ] = useField('ticker')
  const handleChange = async (e) => {
    field.onChange(e)
    debouncedData(e.target.value, setSuggestions)
  }
  return (
    <>
      <label>Company Ticker Symbol</label>
      <input
        {...field}
        onChange={handleChange}
        placeholder={'TCKR'}
      />
      <ul>
        {suggestions.slice(0, 10).map(({ symbol, name, }) =>
          <li
            value='submit'
            onClick={() => {
              helpers.setValue(symbol)
              setSuggestions([])
              props.submitForm()
            }}
            key={symbol}
          >
            {name} - {symbol}
          </li>
        )}
      </ul>
    </>)
}

export default AutoCompleteSearch
