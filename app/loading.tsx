import { PostSkeleton } from "./components/post"

export default function Loading() {
  return (
    <>
      {Array.from({ length: 30 }).map((_, i) => (
        <PostSkeleton key={i} />
      ))}
    </>
  )
}
