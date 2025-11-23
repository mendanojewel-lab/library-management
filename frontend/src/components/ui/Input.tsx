import React from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export const Input: React.FC<Props> = ({label, className = '', ...rest}) => {
  return (
    <label className="block">
      {label && <div className="mb-1 text-sm font-medium">{label}</div>}
      <input className={`border px-3 py-2 rounded-md w-full ${className}`} {...rest} />
    </label>
  )
}

export default Input
