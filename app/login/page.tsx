'use client'
import { supabase } from '../../lib/supabaseClient'

export default function Login() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  )
}