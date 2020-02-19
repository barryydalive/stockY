import React, { useState, } from 'react'
import { useFormik, } from 'formik'
import * as yup from 'yup'
import { Box, Form, FirstRow, Row, Button, } from './Login.css.js'
import FormInput from './FormInput.js'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2))
}
const Login = () => {

  const [ formType, setFormType, ] = useState('Sign Up')

  const formik = useFormik({
    initialValues,
    onSubmit,
  })

  const toggleForm = () => {
    setFormType(prevState => prevState === 'Sign Up' ? 'Login' : 'Sign Up')
  }

  return (
    <Box>
      <h1>{formType}</h1>
      <Form onSubmit={formik.handleSubmit}>

        {formType === 'Sign Up' && <FirstRow>
          <FormInput formik={formik} inputFor={'firstName'} type={'text'} />
          <FormInput formik={formik} inputFor={'lastName'} type={'text'} />
        </FirstRow>}
        <Row>

          <FormInput formik={formik} inputFor={'email'} type={'email'} />
        </Row>
        <Row>

          <FormInput formik={formik} inputFor={'password'} type={'password'} />
        </Row>
        <Button type='submit'>Submit</Button>
      </Form>

      Already have an account?
      <Button onClick={toggleForm}>Login Instead</Button>
    </Box>
  )
}

export default Login
