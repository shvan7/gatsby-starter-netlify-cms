import React from 'react'
import styled from 'styled-components'

import Input from './Input'

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 60%;
  flex-wrap: wrap;
  font-family: Lato Light;
  padding: 1em;

  & input,
  & textarea {
    min-width: 250px;
  }

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
  fields.map((field, i) => {
    switch (field.type) {
      case 'alphabet':
        return <Input key={i + '-field-' + field.label} {...field} />
      case 'mail':
        return <Input key={i + '-field-' + field.label} {...field} />
      case 'text':
        return <Textarea key={i + '-field-' + field.label} {...field} />
      default:
        return <p>Error Type Input</p>
    }
  })

const FormGenerator = ({ content }) => {
  const prevent = event => event.preventDefault()
  return (
    <Form
      style={content.style}
      name={content.title}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {renderFields(content.fields)}
      <div className="button-div">
        <button type="submit" onClick={prevent}>
          {content.labelButton}
        </button>
      </div>
    </Form>
  )
}

export default FormGenerator
