import React, { useState, useContext, } from 'react'
import { useField, } from 'formik'
import { SearchAndBuyContext, UserContext, } from '../../../../../Context'
import { Formik, Form, } from 'formik'
import axios from 'axios'

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
      <button type='submit'>Buy {field.value} shares for ${total.toString().slice(0, -2)}.{total.toString().slice(-2)}</button>
    </>
  )
}

const Buy = () => {
  const { stock: { price, symbol, }, stock, } = useContext(SearchAndBuyContext)
  const { user, setUser, } = useContext(UserContext)
  const [ total, setTotal, ] = useState(Number(price))

  const handleSubmit = async({ quantity, }) => {
    if (user.cash - total >= 0) {
      const { data, } = await axios.post('/api/transaction', {
        stock,
        total,
        quantity,
      })
      setUser((prevAmount) => ({
        ...prevAmount,
        cash: prevAmount.cash - total,
      }))
    }
  }

  return (
    <>
      <h3>{symbol} - ${price.toString().slice(0, -2)}.{price.toString().slice(-2)}</h3>
      <Formik initialValues={{ quantity: 1, }} onSubmit={handleSubmit}>
        <Form>
          <QuantityField setTotal={setTotal} total={total} price={price} />
        </Form>
      </Formik>
    </>
  )
}

export default Buy
