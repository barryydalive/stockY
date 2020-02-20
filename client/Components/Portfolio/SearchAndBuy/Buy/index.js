import React, { useState, useContext, } from 'react'
import { useField, } from 'formik'
import { SearchAndBuyContext, } from '../../../../Context'
import { Formik, Form, } from 'formik'

const QuantityField = ({ setTotal, total, price, }) => {
  const [ field, ] = useField('quantity')
  const handleChange = (e) => {
    field.onChange(e)
    setTotal(price * e.target.value)
  }
  return (
    <>
      <label htmlFor='quantity'>Quantity</label>
      <input {...field} type='number' onChange={handleChange} />
      <button type='submit'>Buy {field.value} shares for ${total.toFixed(2)}</button>
    </>
  )
}

const Buy = () => {
  const { stock: { price, symbol, }, setCash, cash, } = useContext(SearchAndBuyContext)
  const [ total, setTotal, ] = useState(Number(price))

  const handleSubmit = () => {
    if (cash - total >= 0) {
      setCash((prevAmount) => (prevAmount - total).toFixed(2))
    }
  }

  return (
    <>
      <h3>{symbol} - ${Number(price).toFixed(2)}</h3>
      <Formik initialValues={{ quantity: 0, }} onSubmit={handleSubmit}>
        <Form>
          <QuantityField setTotal={setTotal} total={total} price={price} />
        </Form>
      </Formik>
    </>
  )
}

export default Buy
