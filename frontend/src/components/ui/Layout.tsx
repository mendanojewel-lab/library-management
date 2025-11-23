import React from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'

export const Layout: React.FC<{children?: React.ReactNode}> = ({children}) => {
  const auth = useAuth()

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-semibold">Library</Link>
          <nav className="space-x-3">
            {!auth.user ? (
              <>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            ) : (
              <>
                {auth.user.role === 'ADMIN' ? <Link to="/admin">Dashboard</Link> : <Link to="/user">My Books</Link>}
                <button onClick={() => auth.logout()} className="ml-3 text-sm text-red-600">Sign out</button>
              </>
            )}
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-6">{children}</main>
    </div>
  )
}

export default Layout
