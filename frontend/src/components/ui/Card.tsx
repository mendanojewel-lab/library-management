import React from 'react'

export const Card: React.FC<{className?: string; children?: React.ReactNode}> = ({children, className = ''}) => {
  return <div className={`p-4 bg-white rounded-md shadow-sm ${className}`}>{children}</div>
}

export default Card
