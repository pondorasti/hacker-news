import clsx from "clsx"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"
import { hn } from "../../lib/hn"
import { ClockIcon, CommentIcon, PersonIcon, UpArrowIcon } from "./Icons"

export function PostSkeleton() {
  /* https://delba.dev/blog/animated-loading-skeletons-with-tailwind */

  return (
    <div className={clsx("h-18 flex w-full flex-col space-y-1 rounded-xl bg-gray-800/0 p-2")}>
      <div className="h-5 rounded-lg bg-gray-700"></div>
      <div className="h-[15px] rounded-md bg-gray-600"></div>
    </div>
  )
}

const pStyle =
  "flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-400 truncate leading-[14px]"

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
          {post.url && (
            <a
              href={post.url}
              className={clsx(
                "relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100",
                "cursor-ne-resize text-xs",
                "text-gray-700 after:bg-orange-500 hover:text-orange-500 dark:text-gray-400 hover:dark:text-orange-500",
                "transition-colors duration-300 ease-in-out after:transition-transform after:duration-300 after:ease-in-out"
              )}
              target="_blank"
              rel="noreferrer"
            >
              {new URL(post.url).host.replace(/^www\./, "")}
            </a>
          )}
        </div>

        <div className="flex space-x-3">
          <p className={pStyle}>
            <UpArrowIcon />
            <span className="mt-px">{post.score}</span>
          </p>
          <p className={pStyle}>
            <PersonIcon />
            <span className="mt-px">{post.by}</span>
          </p>
          <p className={pStyle}>
            <ClockIcon />
            <span className="mt-px">{timeAgo.format(post.date)}</span>
          </p>
          <p className={pStyle}>
            <CommentIcon />
            <span className="mt-px">{post.descendants} comments</span>
          </p>
        </div>
      </div>
    </>
  )
}
