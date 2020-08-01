import React from 'react'
import styled from 'styled-components'

// CSS --------------------------------------------------------------
const Div = styled.div`
  background-color: none;
  position: relative;
  padding: 0 15px;
  flex: 1;
`

const InputStyled = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 1.2px solid black;
  outline: 0;
  font-size: 1.3rem;
  color: #1c2826;
  padding: 20px 0;
  background: transparent;
  transition: border-color 0.2s;

  &:focus ~ label {
    top: 0;
    transition: 0.2s;
    font-size: 1rem;
    opacity: 0.5;
  }

  & ~ label {
    position: absolute;
    top: ${props => (props.value ? '0' : '35px')};
    font-size: ${props => (props.value ? '1rem' : '1.3rem')};
    opacity: ${props => (props.value ? 0.5 : 1)};
    display: block;
    transition: 0.2s;
  }

  & ~ p {
    color: red;
    font-size: 0.7em;
    margin: 0;
    float: right;
  }
`

const SvgChecked = () => {
  return (
    <svg
      height="40"
      width="40"
      viewBox="0 20 100 55"
      style={{ backgroundColor: 'transparent', position: 'absolute', right: 0 }}
    >
      <g>
        <polygon
          fill="#5BB023"
          stroke="#5BB023"
          strokeWidth="1"
          strokeLinejoin="round"
          points="38.5,61.2 25.3,48 20.8,52.5 38.5,70.2 76.5,32.2 72,27.7 	"
        />
      </g>
    </svg>
  )
}

// Component --------------------------------------------------------
const Input = props => {
  const { name, label, value, onChange, options = {} } = props
  const { min, max, valid, msgError } = options

  const labelLowerCase = name && name.toLowerCase() + '-str-input'

  const isValidLength = str => {
    if (!min || !max || !str.length) return false
    const l = str.length
    return l >= min && l <= max
  }

  return (
    <Div>
      {valid && isValidLength(value) && <SvgChecked />}
      <InputStyled type="text" name={name} id={labelLowerCase} value={value} onChange={onChange} />
      {!valid && <p>{msgError}</p>}
      <label htmlFor={labelLowerCase}>{label}</label>
    </Div>
  )
}

export default Input
