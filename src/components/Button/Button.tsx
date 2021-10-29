import styled from 'styled-components'

export interface d {
  onClick: () => void
}

function testa(d: d) {
  return 'asdfasdf'
}

const PrimaryButton = styled.button`
  background-color: #0070f3;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
`

export {PrimaryButton, testa}
