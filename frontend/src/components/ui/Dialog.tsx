import React from 'react'

export const Dialog: React.FC<{
  open: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
  children?: React.ReactNode
}> = ({open, onOpenChange, title, children}) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40" onClick={() => onOpenChange?.(false)} />
      <div className="bg-white rounded-md shadow-lg z-10 w-full max-w-2xl p-4">
        {title && <div className="mb-3 text-lg font-semibold">{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Dialog
