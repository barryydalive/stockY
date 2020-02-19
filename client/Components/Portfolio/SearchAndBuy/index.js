import React from 'react'
import { useFormik, } from 'formik'

const initialValues = {
  ticker: '',
}

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2))
}
const SearchAndBuy = () => {
  const formik = useFormik({
    initialValues,
    onSubmit, })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Company Ticker Symbol</label>
        <input
          id={'ticker'}
          name={'ticker'}
          type={'text'}
          onChange={formik.handleChange}
          value={formik.values.ticker}
          placeholder={'TCKR'}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchAndBuy
