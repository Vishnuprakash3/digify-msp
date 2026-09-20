
import BlogClient from './BlogClient'

export const metadata = {
  title: 'Blog — DigifyMSP',
  description: 'Read the latest posts from DigifyMSP. Practical tips, updates, and announcements.',
  openGraph: {
    title: 'Blog — DigifyMSP',
    description: 'Read the latest posts from DigifyMSP. Practical tips, updates, and announcements.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: 'https://your-domain.com/blog' },
}

type Post = {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  createdAt: string
}
export default function BlogPage() {
  return <BlogClient />
}
