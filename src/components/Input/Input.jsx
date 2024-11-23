import React from 'react'

export const Input = ({ type = "text", id, label, placeholder, errorMessage, pattern }) => {
  return (
    <label className="input-wrapper" htmlFor={id}>
      {label}
      <input
        required
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        pattern={pattern}
      />
      <span id="error-message">
        {errorMessage}
      </span>
    </label>
  )
}
