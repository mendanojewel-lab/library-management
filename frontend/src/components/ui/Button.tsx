import React from 'react'

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, className = '', ...rest}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-slate-900 text-white hover:opacity-90 disabled:opacity-60 ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
