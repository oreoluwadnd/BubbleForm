import { useState, FormEvent, ChangeEvent } from 'react'

interface Validation {
  [key: string]: any
  required?: {
    value: boolean
    message: string
  }
  pattern?: {
    value: string
    message: string
  }
  custom?: {
    [key: string]: {
      isValid: (value: any, data: any) => boolean
      message: string
    }
  }
}

interface sanitizeFn {
  (value: any): any
}

export const BubbleForm = (options: {
  validations: Validation
  initialValues?: any
  initialErrorMessage?: any
  sanitizeFn?: sanitizeFn
  onSubmit?: () => any
}) => {
  const [data, setData] = useState(options?.initialValues || {})
  const [errors, setErrors] = useState(options?.initialErrorMessage || {})

  const validateField = (key?: string, values?: any) => {
    let validations = options?.validations
    if (key) {
      validations = {
        [key]: options.validations[key],
      }
    }
    if (validations) {
      let valid = true
      const newErrors: any = { ...errors }
      for (const key in validations) {
        const value: any = values || data[key]
        const validation = validations[key]!
        const pattern = validation?.pattern
        const custom = validation?.custom
        if (validation?.required?.value && !value) {
          valid = false
          newErrors[key] = validation?.required?.message
        } else if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false
          newErrors[key] = pattern.message
        } else if (custom) {
          for (const errorKey in custom) {
            if (custom[errorKey]?.isValid && !custom[errorKey].isValid(value, data)) {
              valid = false
              newErrors[key] = custom[errorKey].message
            }
          }
        }
      }
      if (!valid) {
        setErrors((prevState: any) => ({
          ...prevState,
          ...newErrors,
        }))
        return
      }
    }

    if (key) {
      setErrors((prevState: any) => {
        const newErrors = { ...prevState }
        delete newErrors[key]
        return newErrors
      })
    } else {
      setErrors({})
    }
  }

  const handleChange = () => (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLButtonElement
    const valueData = options?.sanitizeFn ? options?.sanitizeFn(value) : value
    setData((prevState: any) => ({
      ...prevState,
      [name]: valueData,
    }))
    validateField(name, valueData)
  }

  const handleBlur = () => (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLButtonElement
    validateField(name, value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    validateField()
    if (Object.keys(errors).length > 0 && options?.onSubmit && Object.keys(data).length > 0) {
      return
    }
    if (options?.onSubmit) {
      options.onSubmit()
    }
    setData(options?.initialValues || {})
  }

  return {
    data,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
  }
}
