import React from 'react'
import { useField, } from 'formik'
import debounce from '../../../../../utility/debounce'
import axios from 'axios'
import { Suggestion, SearchLayout, Input, Suggestions, } from './AutoComplete.css'

const getData = async (search, setSuggestions) => {
  if (search) {
    const { data, } = await axios.get(`/api/search/${search}`)
    setSuggestions(data)
  } else {
    setSuggestions([])
  }
}
const debouncedData = debounce(getData, 500)

const AutoCompleteSearch = ({ suggestions, setSuggestions, ...props }) => {
  const [ field, , helpers, ] = useField('ticker')

  const handleChange = async (e) => {
    field.onChange(e)
    debouncedData(e.target.value, setSuggestions)
  }
  return (
    <SearchLayout>
      <label>Company Ticker Symbol</label>
      <Input
        {...field}
        onChange={handleChange}
        placeholder={'TCKR'} />
      <Suggestions>
        {suggestions.slice(0, 10).map(({ symbol, name, }) =>
          <Suggestion
            value='submit'
            onClick={() => {
              helpers.setValue(symbol)
              setSuggestions([])
              props.submitForm()
            }}
            key={symbol}
          >
            {name} - {symbol}
          </Suggestion>
        )}

      </Suggestions>
    </SearchLayout>)
}

export default AutoCompleteSearch
