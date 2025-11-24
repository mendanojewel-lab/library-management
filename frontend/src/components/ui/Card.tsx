import React from 'react'

export const Card: React.FC<{className?: string; children?: React.ReactNode}> = ({children, className = ''}) => {
  return <div className={`p-4 bg-white dark:bg-slate-900 rounded-md border border-gray-200 shadow-sm dark:shadow-md dark:border dark:border-slate-800 ${className}`}>{children}</div>
}

export default Card
