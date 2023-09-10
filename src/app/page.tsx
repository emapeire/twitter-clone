import { AuthButtonServer } from '@/components/auth-button-server'
import PostCard from '@/components/post-card'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*, users(*)')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer />
      {
        posts?.map(post => {
          const {
            id,
            users,
            content
          } = post
          const {
            user_name: username,
            name,
            avatar_url: avatar
          } = users
          return (
            <PostCard
              key={id}
              username={username}
              name={name}
              avatar={avatar}
              content={content}
            />
          )
        })
      }
    </main>
  )
}
