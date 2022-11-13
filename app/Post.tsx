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
      className="h-6 w-6 -rotate-90 text-gray-300"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
      />
    </svg>
  )
}

function CommentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6 text-gray-200"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
      />
    </svg>
  )
}

export function PostSkeleton() {
  /* https://delba.dev/blog/animated-loading-skeletons-with-tailwind */

  return (
    <div className={clsx("h-18 mt-4 flex w-full flex-row space-x-2 rounded-2xl bg-gray-800 p-4")}>
      <div className="h-3 w-3/5 rounded-lg bg-gray-700"></div>
      <div className="h-3 w-4/5 rounded-lg bg-gray-600"></div>
    </div>
  )
}

export async function Post({ id }: { id: number }) {
  const post = await hn.getItem(id)

  if (!post) return null

  return (
    <div className={clsx("h-18 mt-4 flex w-full flex-row space-x-2 rounded-2xl bg-gray-800 p-4")}>
      <div className="mt-0.5 flex flex-col items-center">
        <UpvoteIcon />
        <span className="text-xs text-gray-50">{post.score}</span>
      </div>
      <div className="flex flex-col space-y-5">
        <h2 className="text-lg font-medium text-gray-50">{post.title}</h2>
      </div>
    </div>
  )
}
