import React from 'react'
import styled from 'styled-components'

import Input from './Input'

const Form = styled.form`
  display: flex;
  width: 60%;
  flex-wrap: wrap;
  font-family: Lato Light;
  padding: 1em;

  & .textarea-div {
    margin-top: 1em;
    padding: 15px;
    width: 100%;

    & > label {
      padding: 0 3px;
      font-size: 1.3rem;
    }
  }

  & .textarea-class {
    width: 100%;
    height: 15vh;
    margin-top: 7px;

    & > textarea {
      width: 100%;
      height: 100%;
      font-size: 1rem;
      border-radius: 0;
      padding: 10px;
      box-sizing: border-box;
    }
  }

  & .button-div {
    padding: 15px;
    width: 100%;

    & > button {
      float: right;
      background-color: ${props => props.style.bgTitle};
      color: ${props => props.style.btnColor};
    }
  }
`

const Textarea = field => (
  <div className="textarea-div">
    <label htmlFor={field.label}>{field.label}</label>
    <div className="textarea-class">
      <textarea id={field.label} />
    </div>
  </div>
)

const renderFields = fields =>
  fields.map(field => {
    switch (field.type) {
      case 'alpha':
        return <Input {...field} />
      case 'mail':
        return <Input {...field} />
      case 'text':
        return <Textarea {...field} />
      default:
        return <p>Error Type Input</p>
    }
  })

const FormGenerator = props => {
  const prevent = event => event.preventDefault()
  return (
    <Form style={props.style} action={props.form.action}>
      {renderFields(props.form.fields)}
      <div className="button-div">
        <button type="submit" onClick={prevent}>
          {props.form.submitText}
        </button>
      </div>
    </Form>
  )
}

export default FormGenerator
