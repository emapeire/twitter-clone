import PostCard from "./post-card"
import { type Post } from '@/types/posts'

export function PostList({ posts }: { posts: Post[] | null }) {
  return (
    <>
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
    </>
  )
}
