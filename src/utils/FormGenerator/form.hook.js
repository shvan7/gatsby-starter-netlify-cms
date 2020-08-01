import { useState, MouseEvent, ChangeEvent } from 'react'

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues)

  const handleSubmit = event => {
    if (event) event.preventDefault()
    setValues(initialValues)
  }

  const handleChange = event => {
    event.persist()
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return {
    values,
    handleSubmit,
    handleChange,
  }
}
