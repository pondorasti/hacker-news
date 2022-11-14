import clsx from "clsx"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"
import { hn } from "../lib/hn"

function CommentIcon() {
  return (
    <svg aria-hidden height="13" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 8.04889C1 9.20445 1.81106 10.2112 2.95506 10.3795C3.74011 10.4951 4.53311 10.5839 5.33333 10.646V14L8.27711 11.0562C8.47675 10.8579 8.74471 10.7434 9.02605 10.7363C10.3993 10.6983 11.7691 10.5791 13.1283 10.3795C14.2723 10.2112 15.0833 9.20517 15.0833 8.04817V3.70183C15.0833 2.54484 14.2723 1.53878 13.1283 1.3705C11.444 1.12329 9.74396 0.999465 8.04167 1C6.31411 1 4.61544 1.12639 2.95506 1.3705C1.81106 1.53878 1 2.54556 1 3.70183V8.04817V8.04889Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg aria-hidden height="13" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.49933 3.5C8.49933 4.16304 8.23593 4.79892 7.76709 5.26776C7.29825 5.7366 6.66237 6 5.99933 6C5.33629 6 4.7004 5.7366 4.23156 5.26776C3.76272 4.79892 3.49933 4.16304 3.49933 3.5C3.49933 2.83696 3.76272 2.20107 4.23156 1.73223C4.7004 1.26339 5.33629 1 5.99933 1C6.66237 1 7.29825 1.26339 7.76709 1.73223C8.23593 2.20107 8.49933 2.83696 8.49933 3.5V3.5ZM1 12.912C1.02142 11.6002 1.55756 10.3494 2.49278 9.42936C3.42801 8.50928 4.68739 7.99364 5.99933 7.99364C7.31127 7.99364 8.57065 8.50928 9.50587 9.42936C10.4411 10.3494 10.9772 11.6002 10.9987 12.912C9.43025 13.6312 7.72476 14.0023 5.99933 14C4.21533 14 2.522 13.6107 1 12.912Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg aria-hidden height="13" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5 3.16667V7.5H10.75M14 7.5C14 8.35359 13.8319 9.19883 13.5052 9.98744C13.1786 10.7761 12.6998 11.4926 12.0962 12.0962C11.4926 12.6998 10.7761 13.1786 9.98744 13.5052C9.19883 13.8319 8.35359 14 7.5 14C6.64641 14 5.80117 13.8319 5.01256 13.5052C4.22394 13.1786 3.50739 12.6998 2.90381 12.0962C2.30022 11.4926 1.82144 10.7761 1.49478 9.98744C1.16813 9.19883 1 8.35359 1 7.5C1 5.77609 1.68482 4.12279 2.90381 2.90381C4.12279 1.68482 5.77609 1 7.5 1C9.22391 1 10.8772 1.68482 12.0962 2.90381C13.3152 4.12279 14 5.77609 14 7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UpArrowIcon() {
  return (
    <svg aria-hidden height="13" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.075 14.5V1M7.075 1L1 7.075M7.075 1L13.15 7.075"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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
  "flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-400 truncate leading-[13px]"

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo("en-US")

export async function Post({ id, index }: { id: number; index: number }) {
  const post = await hn.getItem(id)

  if (!post) return null

  return (
    <>
      <div className="flex flex-col space-y-1 overflow-hidden rounded-xl p-2 text-zinc-800 dark:text-zinc-100">
        <div className="flex flex-col items-start space-x-1 sm:flex-row sm:items-baseline">
          <h2 className="truncate text-sm font-medium">
            {index}. {post.title}
          </h2>
          <a
            href={post.url}
            className={clsx(
              "relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100",
              "cursor-ne-resize text-xs",
              "text-gray-700 after:bg-orange-500 hover:text-orange-500 dark:text-gray-400 hover:dark:text-orange-500",
              "transition-colors duration-300 ease-in-out after:transition-transform after:duration-300 after:ease-in-out"
            )}
            target="_blank"
            rel="noreferrer"
          >
            {new URL(post.url).host.replace(/^www\./, "")}
          </a>
        </div>

        <div className="flex space-x-3">
          <p className={pStyle}>
            <UpArrowIcon />
            <span>{post.score}</span>
          </p>
          <p className={pStyle}>
            <PersonIcon />
            <span className="">{post.by}</span>
          </p>
          <p className={pStyle}>
            <ClockIcon />
            <span>{timeAgo.format(post.date)}</span>
          </p>
          <p className={pStyle}>
            <CommentIcon />
            <span>{post.descendants} comments</span>
          </p>
        </div>
      </div>
    </>
  )
}
