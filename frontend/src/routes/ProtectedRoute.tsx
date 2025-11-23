import React from 'react'
import {Navigate} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'

type Props = {
  children: React.ReactElement
  requireRole?: 'ADMIN' | 'USER'
}

export const ProtectedRoute: React.FC<Props> = ({children, requireRole}) => {
  const auth = useAuth()
  if (!auth.user) {
    return <Navigate to="/signin" replace />
  }
  if (requireRole && auth.user.role !== requireRole) {
    // simple guard
    return <Navigate to="/" replace />
  }
  return children
}

export default ProtectedRoute
