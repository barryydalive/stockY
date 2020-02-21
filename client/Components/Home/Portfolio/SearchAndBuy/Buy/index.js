import React, { useState, useContext, } from 'react'
import { useField, } from 'formik'
import { SearchAndBuyContext, UserContext, } from '../../../../../Context'
import { Formik, Form, } from 'formik'
import axios from 'axios'

const QuantityField = ({ setTotal, total, price, }) => {
  const [ field, { error, }, ] = useField('quantity')
  console.log('error:', error)
  const handleChange = (e) => {
    field.onChange(e)
    setTotal(price * e.target.value)
  }
  return (
    <>
      <label htmlFor='quantity'>Quantity</label>
      <input {...field} type='number' onChange={handleChange} />
      <p style={{ color: 'red', }}>{error}</p>
      <button type='submit'>Buy {field.value} shares for ${total.toString().slice(0, -2)}.{total.toString().slice(-2)}</button>
    </>
  )
}

const Buy = () => {
  const { stock: { price, symbol, }, stock, } = useContext(SearchAndBuyContext)
  const { user, setUser, } = useContext(UserContext)
  const [ total, setTotal, ] = useState(Number(price))
  const validate = values => {
    const errors = {}

    if (values.quantity % 1 !== 0) {
      errors.quantity = 'only whole numbers allowed'
    }
    if (values.quantity < 1) { errors.quantity = 'must buy at least one stock!' }

    return errors
  }
  const handleSubmit = async({ quantity, }) => {
    if (user.cash - total >= 0) {
      const { data, } = await axios.post('/api/transaction', {
        stock,
        total,
        quantity,
      })
      console.log('data:', data)
      setUser((prevAmount) => ({
        ...prevAmount,
        cash: prevAmount.cash - total,
      }))
    }
  }

  return (
    <>
      <h3>{symbol} - ${price.toString().slice(0, -2)}.{price.toString().slice(-2)}</h3>
      <Formik initialValues={{ quantity: 1, }} onSubmit={handleSubmit} validate={validate} validateOnChange>
        <Form>
          <QuantityField setTotal={setTotal} total={total} price={price} />
        </Form>
      </Formik>
    </>
  )
}

export default Buy
