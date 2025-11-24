import React from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export const Input: React.FC<Props> = ({label, className = '', ...rest}) => {
  return (
    <label className="block">
      {label && <div className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">{label}</div>}
      <input className={`border dark:border-slate-700 px-3 py-2 rounded-md w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white dark:placeholder-slate-400 ${className}`} {...rest} />
    </label>
  )
}

export default Input
