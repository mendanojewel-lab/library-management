import React, {useState} from 'react'
import {Input} from '../components/ui/Input'
import {Button} from '../components/ui/Button'
import {useAuth} from '../context/AuthContext'

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const auth = useAuth()

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      await auth.login({email, password})
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl mb-4 text-slate-900 dark:text-white">Sign In</h2>
      <form onSubmit={submit} className="space-y-4 bg-white dark:bg-slate-900 p-4 rounded shadow-sm dark:shadow-md dark:border dark:border-slate-800">
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <div className="text-red-600 dark:text-red-400">{error}</div>}
        <Button type="submit">Sign in</Button>
      </form>
    </div>
  )
}

export default SignIn
