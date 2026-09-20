import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const DATA_PATH = path.join(process.cwd(), 'data', 'posts.json')

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function makeSlug(title: string, posts: any[]) {
  const base = slugify(title) || 'post'
  let slug = base
  let index = 1
  while (posts.some((post) => post.slug === slug)) {
    slug = `${base}-${index++}`
  }
  return slug
}

async function readPosts() {
  try {
    const raw = await fs.readFile(DATA_PATH, 'utf-8')
    return JSON.parse(raw)
  } catch (err) {
    return []
  }
}

async function writePosts(posts: any[]) {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true })
  await fs.writeFile(DATA_PATH, JSON.stringify(posts, null, 2), 'utf-8')
}

export async function GET() {
  const posts = await readPosts()
  return NextResponse.json(posts)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    if (!body || !body.title || !body.content) {
      return NextResponse.json({ error: 'Missing title or content' }, { status: 400 })
    }
    const posts = await readPosts()
    const newPost = {
      id: String(Date.now()),
      slug: makeSlug(String(body.title), posts),
      title: String(body.title),
      excerpt: body.excerpt ? String(body.excerpt) : String(body.content).slice(0, 160),
      content: String(body.content),
      author: body.author ? String(body.author) : 'Anonymous',
      imageUrl: body.imageUrl ? String(body.imageUrl) : undefined,
      imageAlt: body.imageAlt ? String(body.imageAlt) : undefined,
      createdAt: new Date().toISOString(),
    }
    posts.unshift(newPost)
    await writePosts(posts)
    return NextResponse.json(newPost, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
