import styled from 'styled-components'

export const Suggestions = styled.ul`
  border: 1px solid #999;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;
  width: calc(300px + 1rem);
`
export const Suggestion = styled.li`
  padding: 0.5rem;
  background-color: #C6DABF;
  :hover {
    background-color: #114B5F;
    color:white;
    cursor: pointer;
    font-weight: 700;
  }
`

export const SearchLayout = styled.div`
  display:flex;
  flex-direction:column
`

export const Input = styled.input`
  border: 1px solid #999;
  padding: 0.5rem;
  width: 300px;
  `
