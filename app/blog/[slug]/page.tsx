import fs from 'fs/promises'
import path from 'path'
import { notFound } from 'next/navigation'
import Link from 'next/link'

const DATA_PATH = path.join(process.cwd(), 'data', 'posts.json')

async function readPosts() {
  try {
    const raw = await fs.readFile(DATA_PATH, 'utf-8')
    return JSON.parse(raw)
  } catch (error) {
    return []
  }
}

function getPostSlug(post: any) {
  return post.slug || post.id
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = await readPosts()
  const post = posts.find((item: any) => getPostSlug(item) === params.slug)
  if (!post) {
    return { title: 'Post not found | DigifyMSP' }
  }

  const url = `https://your-domain.com/blog/${params.slug}`
  return {
    title: `${post.title} | DigifyMSP`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url,
      images: post.imageUrl ? [{ url: post.imageUrl, alt: post.imageAlt || post.title }] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: { canonical: url },
  }
}

export async function generateStaticParams() {
  const posts = await readPosts()
  return posts.map((post: any) => ({ slug: getPostSlug(post) }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const posts = await readPosts()
  const post = posts.find((item: any) => getPostSlug(item) === params.slug)
  if (!post) notFound()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.createdAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://your-domain.com/blog/${params.slug}`,
    },
    image: post.imageUrl ? post.imageUrl : undefined,
  }

  return (
    <div style={{ padding: 48, maxWidth: 900, margin: '0 auto' }}>
      <nav style={{ marginBottom: 24 }}>
        <Link href="/blog" style={{ color: '#0b61ff' }}>
          ← Back to blog
        </Link>
      </nav>
      <article>
        <h1 style={{ marginBottom: 14 }}>{post.title}</h1>
        <div style={{ color: '#6b7280', marginBottom: 18 }}>
          {post.author} • {new Date(post.createdAt).toLocaleDateString()}
        </div>
        {post.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.imageUrl} alt={post.imageAlt || post.title} style={{ width: '100%', height: 'auto', borderRadius: 16, marginBottom: 24 }} />
        )}
        <p style={{ color: '#374151', whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>{post.content}</p>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  )
}
