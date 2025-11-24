import React from 'react'

type TabItem = {
  key: string
  label: string
  content: React.ReactNode
}

export const Tabs: React.FC<{tabs: TabItem[], className?: string}> = ({tabs, className = ''}) => {
  const [active, setActive] = React.useState<string>(tabs[0]?.key || '')

  const activeTab = tabs.find(t => t.key === active) || tabs[0]

  return (
    <div className={className}>
      <div className="border-b dark:border-slate-700 mb-4">
        <nav className="flex gap-2" aria-label="Tabs">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-3 py-2 -mb-px border-b-2 ${t.key === active ? 'border-slate-900 dark:border-white font-semibold' : 'border-transparent text-slate-600 dark:text-slate-400'}`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </div>
      <div>
        {activeTab?.content}
      </div>
    </div>
  )
}

export default Tabs
