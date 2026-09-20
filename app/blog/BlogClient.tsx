"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './blog.module.css'

type Post = {
  id: string
  slug?: string
  title: string
  excerpt: string
  content: string
  author: string
  createdAt: string
  imageUrl?: string
  imageAlt?: string
}

export default function BlogClient() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const res = await fetch('/api/posts')
        const data = await res.json()
        if (mounted) setPosts(data)
      } catch (err) {
        console.error(err)
      } finally {
        if (mounted) setLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  const featured = posts[0]
  const others = posts.slice(1)

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>Latest posts, tips, and announcements from DigifyMSP.</p>
        </div>
        <div>
          <Link href="/admin" className={styles.adminLink}>Admin</Link>
        </div>
      </div>

      {loading ? (
        <p>Loading posts…</p>
      ) : posts.length === 0 ? (
        <p>No posts yet. Add one in the admin page.</p>
      ) : (
        <div className={styles.grid}>
          <div>
            {featured && (
              <article className={styles.featured}>
                {featured.imageUrl ? (
                  <div className={`${styles.imageWrap} ${styles.featuredImageWrap}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={featured.imageUrl} alt={featured.imageAlt || featured.title} />
                  </div>
                ) : (
                  <div className={`${styles.noImage} ${styles.featuredImageWrap}`}>
                    <strong style={{ fontSize: 18 }}>{featured.title}</strong>
                  </div>
                )}

                <div>
                  <h2 className={styles.featuredTitle}>
                    <Link href={`/blog/${featured.slug ?? featured.id}`}>{featured.title}</Link>
                  </h2>
                  <div className={styles.featuredMeta}>{featured.author} • {new Date(featured.createdAt).toLocaleDateString()}</div>
                  <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                </div>
              </article>
            )}

            <ul className={styles.list}>
              {others.map((p) => (
                <li key={p.id}>
                  <article className={styles.card}>
                    {p.imageUrl ? (
                      <div className={styles.imageWrap}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.imageUrl} alt={p.imageAlt || p.title} className={styles.cardImage} />
                      </div>
                    ) : (
                      <div className={styles.noImage} style={{ height: 160 }}>
                        <strong style={{ fontSize: 16 }}>{p.title}</strong>
                      </div>
                    )}
                    <h3 className={styles.postTitle}>
                      <Link href={`/blog/${p.slug ?? p.id}`}>{p.title}</Link>
                    </h3>
                    <div className={styles.meta}>{p.author} • {new Date(p.createdAt).toLocaleDateString()}</div>
                    <p className={styles.excerpt}>{p.excerpt}</p>
                    <Link href={`/blog/${p.slug ?? p.id}`} className={styles.read}>Read full post</Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          <aside className={styles.sideCard}>
            <h4 style={{ marginTop: 0 }}>About</h4>
            <p style={{ margin: 0, color: '#6b7280' }}>DigifyMSP publishes updates, how-tos, and industry insights for managed service providers.</p>
          </aside>
        </div>
      )}
    </div>
  )
}
