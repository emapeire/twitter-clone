import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import Image from "next/image";

export function ComposePost({
  avatar
}:
  {
    avatar: string
  }) {
  const addPost = async (formData: FormData) => {
    'use server'

    const content = formData.get('content') as string
    if (content === null) return

    const supabase = createServerActionClient({ cookies })
    const { data: { user } } = await supabase.auth.getUser()
    if (user === null) return
    await supabase.from('posts').insert({ content, user_id: user.id })

    revalidatePath('/')
  }
  return (
    <form action={addPost} className="flex flex-row p-5 border-b border-white/20">
      <Image alt="profile pic" width={40} height={40} className="rounded-full object-contain mr-2" src={avatar} />
      <div className="flex flex-1 flex-col gap-y-4">
        <textarea
          name="content"
          rows={4}
          className="w-full text-xl bg-black placeholder-gray-500 p-2"
          placeholder="What's on your mind?"
        ></textarea>
        <button type="submit" className="bg-sky-500 text-sm font-bold rounded-full px-5 py-2 self-end">
          Post
        </button>
      </div>
    </form>
  )
}
