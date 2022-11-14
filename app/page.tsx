import { Suspense } from "react"
import { hn } from "../lib/hn"
import { Post, PostSkeleton } from "./Post"

export default async function Home() {
  const postIds = await hn.getPostIds()

  return (
    <>
      {postIds.map((id, index) => (
        <Suspense key={id} fallback={<PostSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <Post id={id} index={index + 1} />
        </Suspense>
      ))}
    </>
  )
}
