import React, { useState, useContext, } from 'react'
import { Formik, Form, } from 'formik'
import * as yup from 'yup'
import { Box, FirstRow, Row, Button, FormContainer, ToggleForm, } from './Login.css.js'
import FormInput from './FormInput.js'
import axios from 'axios'
import { UserContext, } from '../../Context/index.js'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const Login = () => {
  const { user, setUser, } = useContext(UserContext)
  const [ formType, setFormType, ] = useState('Sign Up')
  const onSubmit = async ({ email, password, firstName, lastName, }) => {
    let res
    try {
      if (formType === 'Login') {
        res = await axios.post('/api/auth/login', { email,
          password, })
        console.log('res.data:', res.data)
        setUser(res.data)

      }
      if (formType === 'Sign Up') {
        const address = '/api/auth/signup'
        console.log('address:', address)
        res = await axios.post(address, {
          email,
          password,
          firstName,
          lastName,
        })
        console.log('res.data:', res.data)
        setUser(res.data)
      }
    } catch (authError) {
      alert('incorrect password/email')
    }
  }

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
            <Button type='submit'>{formType}</Button>
          </FormContainer>
        </Form>

      </Formik>
      <ToggleForm onClick={toggleForm}>{formType === 'Sign Up' ? 'Already have an account? Login' : 'Need An Account Sign Up'} Instead</ToggleForm>
    </Box>
  )
}

export default Login
