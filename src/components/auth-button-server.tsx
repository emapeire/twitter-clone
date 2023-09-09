import { AuthButtonClient } from '@/components/auth-button-client'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function AuthButtonServer() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  return <AuthButtonClient session={session} />
}
