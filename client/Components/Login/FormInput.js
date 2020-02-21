import React from 'react'
import { Input, FormField, } from './Login.css'
import { useField, } from 'formik'
const FormInput = ({ name, }) => {
  const title = name.split(/(?=[A-Z])/).map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  const [ field, ] = useField(name)
  let type = 'text'
  if (name === 'password') {
    type = 'password'
  }
  return (
    <FormField>
      <label htmlFor={name}>
        {title}
      </label>
      <Input
        {...field}
        type={type}
      />
    </FormField>
  )
}

export default FormInput
