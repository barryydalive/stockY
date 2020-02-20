import React, { useState, } from 'react'
import { Formik, useFormik, Form, } from 'formik'
import * as yup from 'yup'
import { Box, FirstRow, Row, Button, FormContainer, } from './Login.css.js'
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

  const toggleForm = () => {
    setFormType(prevState => prevState === 'Sign Up' ? 'Login' : 'Sign Up')
  }

  return (
    <Box>
      <h1>{formType}</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit} >
        <Form>
          <FormContainer>
            {formType === 'Sign Up' && <FirstRow>
              <FormInput name={'firstName'} type={'text'} />
              <FormInput name={'lastName'} type={'text'} />
            </FirstRow>}
            <Row>

              <FormInput name={'email'} type={'email'} />
            </Row>
            <Row>

              <FormInput name={'password'} type={'password'} />
            </Row>
            <Button type='submit'>Submit</Button>
          </FormContainer>
        </Form>

      </Formik>
        Already have an account?
      <Button onClick={toggleForm}>Login Instead</Button>
    </Box>
  )
}

export default Login
