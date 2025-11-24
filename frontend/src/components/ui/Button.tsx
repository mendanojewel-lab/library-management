import React from 'react'

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, className = '', ...rest}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-slate-900 dark:bg-slate-700 text-white hover:opacity-90 dark:hover:opacity-80 disabled:opacity-60 ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
