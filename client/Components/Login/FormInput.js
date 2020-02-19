import React from 'react'
import { Input, FormField, } from './Login.css'
const FormInput = ({ formik, inputFor, type, }) => {
  return (
    <FormField>
      <label htmlFor={inputFor}>{inputFor.split(/(?=[A-Z])/).map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}</label>
      <Input
        id={inputFor}
        name={inputFor}
        type={type}
        onChange={formik.handleChange}
        value={formik.values[inputFor]}
        placeholder={inputFor}
      />
    </FormField>
  )
}

export default FormInput
