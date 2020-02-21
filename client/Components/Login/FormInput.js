import React from 'react'
import { Input, FormField, } from './Login.css'
import { useField, } from 'formik'
const FormInput = ({ formik, name, type, }) => {
  const title = name.split(/(?=[A-Z])/).map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  const [ field, ] = useField(name)
  return (
    <FormField>
      <label htmlFor={name}>
        {title}
      </label>
      <Input
        {...field}
      />
    </FormField>
  )
}

export default FormInput
