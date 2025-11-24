import React from 'react'

export const Alert: React.FC<{
  open: boolean
  title?: string
  description?: string
  onConfirm?: () => void
  onCancel?: () => void
}> = ({open, title, description, onConfirm, onCancel}) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/30" onClick={onCancel} />
      <div className="bg-white dark:bg-slate-900 rounded-md shadow-lg z-10 w-full max-w-md p-4 dark:border dark:border-slate-700">
        <div className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">{title || 'Confirm'}</div>
        {description && <div className="text-sm text-gray-600 dark:text-slate-400 mb-4">{description}</div>}
        <div className="flex justify-end gap-2">
          <button className="px-3 py-1 rounded border dark:border-slate-600 dark:hover:bg-slate-800" onClick={onCancel}>Cancel</button>
          <button className="px-3 py-1 rounded bg-red-600 dark:bg-red-700 text-white hover:opacity-90" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Alert
