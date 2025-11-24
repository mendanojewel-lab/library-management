import React, {useState} from 'react'
import {Input} from '../components/ui/Input'
import {Button} from '../components/ui/Button'
import {useAuth} from '../context/AuthContext'

const SignUpUser: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const auth = useAuth()

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      await auth.register({name, email, password, role: 'USER'})
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl mb-4 text-slate-900 dark:text-white">Sign Up</h2>
      <form onSubmit={submit} className="space-y-4 bg-white dark:bg-slate-900 p-4 rounded shadow-sm dark:shadow-md dark:border dark:border-slate-800">
        <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <div className="text-red-600 dark:text-red-400">{error}</div>}
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  )
}

export default SignUpUser
