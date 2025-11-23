import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUpUser from './pages/SignUpUser'
import AdminDashboard from './pages/AdminDashboard'
import UserDashboard from './pages/UserDashboard'
import {Layout} from './components/ui/Layout'
import ProtectedRoute from './routes/ProtectedRoute'

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div className="p-4">Welcome — <Link to="/signin">Sign in</Link></div>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUpUser />} />
        <Route path="/admin" element={<ProtectedRoute requireRole={'ADMIN'}><AdminDashboard /></ProtectedRoute>} />
        <Route path="/user" element={<ProtectedRoute requireRole={'USER'}><UserDashboard /></ProtectedRoute>} />
      </Routes>
    </Layout>
  )
}

export default App
