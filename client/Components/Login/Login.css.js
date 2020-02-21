import styled from 'styled-components'

export const Box = styled.div`
  width: 70vw;
  height: 50vh;
  position:absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  text-align: center;
  padding: 0 5vw;
  background-color: #C6DABF;
`

export const FormContainer = styled.form`
  display:flex;
  align-items: center;
  flex-direction: column;
`

export const Input = styled.input`
  width:100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
`

export const Row = styled.div`
  width: 50vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  flex-direction: row;
`
export const FormField = styled.div`
  width: 100%
`
export const FirstRow = styled.div`
  width: 50vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  flex-direction: row;
  ${FormField} {
    width:40%
  }
`

export const Button = styled.button`
  height: 2em;
  width: 7em;
`
export const ToggleForm = styled.p`
  color: blue;
  :hover {
    color: navy
  };
  cursor: pointer;
`

export const Background = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: #1A936F
`
