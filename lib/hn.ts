interface Item {
  id: number
  deleted: boolean // `true` if the item is deleted.
  type: "job" | "story" | "comment" | "poll" | "pollopt"
  date: number // Creation date of the item.
  by: string // The username of the item's author.
  // text: string // The comment, story or poll text. HTML.
  // dead: boolean // `true` if the item is dead.
  // parent // The comment's parent: either another comment or the relevant story.
  // poll // The pollopt's associated poll.
  kids: number[] // The ids of the item's comments, in ranked display order.
  url?: string // The URL of the story.
  score: number // The story's score, or the votes for a pollopt.
  title: string // The title of the story, poll or job. HTML.
  // parts: number[] // A list of related pollopts, in display order.
  descendants: number // In the case of stories or polls, the total comment count.
}

async function fetchData(type: string) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/${type}.json`)

  if (res.status !== 200) throw new Error(`Status ${res.status}`)
  return res.json()
}

async function getPostIds(type = "topstories", { page = 1, max = 30 } = {}): Promise<number[]> {
  const ids = await fetchData(type)

  const start = max * (page - 1)
  const end = start + max

  return ids.slice(start, end)
}

async function getItem(id: number): Promise<Item | null> {
  const item = await fetchData(`item/${id}`)
  if (!item) return null

  return {
    id: item.id,
    deleted: item.deleted,
    type: item.type,
    date: new Date(item.time * 1000).getTime() || 0,
    by: item.by,
    kids: item.kids || [],
    url: item.url,
    score: item.score,
    title: item.title,
    descendants: item.descendants || 0,
  }
}

export const hn = {
  getPostIds,
  getItem,
}
