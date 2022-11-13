import clsx from "clsx"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"
import { hn } from "../lib/hn"

function UpvoteIcon() {
  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6 -rotate-90"
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
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6 p-[3px]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
      />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="none"
      className="h-6 w-6"
    >
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6 p-[3px]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
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

const pStyle =
  "flex items-center space-x-1 text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap"

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo("en-US")

export async function Post({ id }: { id: number }) {
  const post = await hn.getItem(id)

  if (!post) return null

  return (
    <div className="h-18 mt-4 flex flex-row space-x-2 overflow-hidden rounded-2xl p-4 text-zinc-800 dark:text-zinc-100">
      {/* <div className="mt-0.5 flex flex-col items-center">
        <UpvoteIcon />
        <span className="text-xs">{post.score}</span>
      </div> */}
      <div className="flex flex-col space-y-1">
        <h2 className="text-base font-normal">{post.title}</h2>
        <div className="flex space-x-3">
          <p className={pStyle}>
            <UpvoteIcon />
            <span>{post.score} points</span>
          </p>
          <p className={pStyle}>
            <PersonIcon />
            <span>
              by {post.by} {timeAgo.format(post.date)}
            </span>
          </p>
          <p className={pStyle}>
            <CommentIcon />
            <span>{post.descendants} comments</span>
          </p>
          <a
            href={post.url}
            className={clsx(pStyle, "cursor-ne-resize")}
            target="_blank"
            rel="noreferrer"
          >
            <LinkIcon />
            <span className="!ml-0.5">{new URL(post.url).host.replace(/^www\./, "")}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
