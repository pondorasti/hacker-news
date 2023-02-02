import { PostSkeleton } from "./components/posts"

export default function Loading() {
  return (
    <>
      {Array.from({ length: 30 }).map((_, i) => (
        <PostSkeleton key={i} />
      ))}
    </>
  )
}
