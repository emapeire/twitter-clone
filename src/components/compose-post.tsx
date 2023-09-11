'use client'

import { addPost } from "@/app/actions/add-post-action";
import { ComposePostButton } from "./compose-post-button";
import { useRef } from "react";

export function ComposePost({
  avatar
}:
  {
    avatar: string
  }) {
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <form ref={formRef} action={async (formData) => {
      await addPost(formData)
      formRef.current?.reset()
    }} className="flex flex-row p-5 border-b border-white/20" >
      <img className="rounded-full w-10 h-10 object-contain mr-2" src={avatar} />
      <div className="flex flex-1 flex-col gap-y-4">
        <textarea
          name="content"
          rows={4}
          className="w-full text-xl bg-black placeholder-gray-500 p-2"
          placeholder="What's on your mind?"
        ></textarea>
        <ComposePostButton />
      </div>
    </form >
  )
}
