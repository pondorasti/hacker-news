import clsx from "clsx"
import { hn } from "../lib/hn"

function UpvoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 -rotate-90 text-gray-50"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
      />
    </svg>
  )
}

export function PostSkeleton() {
  /* https://delba.dev/blog/animated-loading-skeletons-with-tailwind */

  return (
    <div className={clsx("space-y-5 rounded-2xl bg-gray-800 p-4 h-18 mt-4 w-full")}>
      <div className="h-3 w-3/5 rounded-lg bg-gray-700"></div>
      <div className="h-3 w-4/5 rounded-lg bg-gray-600"></div>
    </div>
  )
}

export async function Post({ id }: { id: number }) {
  const post = await hn.getItem(id)

  if (!post) return null

  return (
    <div className={clsx("rounded-2xl bg-gray-800 p-4 h-18 flex flex-row mt-4 w-full space-x-2")}>
      <div className="flex flex-col items-center mt-0.5">
        <UpvoteIcon />
        <span className="text-gray-50 text-xs">{post.score}</span>
      </div>
      <div className="flex flex-col space-y-5">
        <h2 className="text-lg font-medium text-gray-50">{post.title}</h2>
        <div className="h-3 w-4/5 rounded-lg bg-gray-600"></div>
      </div>
    </div>
  )
}
