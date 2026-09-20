"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './admin.module.css'

export default function AdminPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageAlt, setImageAlt] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!title || !content) {
      setError('Title and content are required')
      return
    }
    setLoading(true)
    try {
      let imageUrl: string | undefined = undefined
      if (imageFile) {
        const fd = new FormData()
        fd.append('image', imageFile)
        const r = await fetch('/api/upload', { method: 'POST', body: fd })
        if (!r.ok) throw new Error('Image upload failed')
        const jr = await r.json()
        imageUrl = jr.url
      }
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, excerpt, content, author, imageUrl, imageAlt }),
      })
      if (!res.ok) throw new Error('Failed to create post')
      setTitle('')
      setExcerpt('')
      setContent('')
      setAuthor('')
      router.push('/blog')
    } catch (err: any) {
      setError(err?.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Create Post</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label className={styles.label}>Title</label>
            <input className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div>
            <label className={styles.label}>Excerpt (optional)</label>
            <input className={styles.input} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
          </div>

          <div>
            <label className={styles.label}>Content</label>
            <textarea className={styles.textarea} value={content} onChange={(e) => setContent(e.target.value)} />
          </div>

          <div>
            <label className={styles.label}>Author (optional)</label>
            <input className={styles.input} value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>

          <div>
            <label className={styles.label}>Feature Image (optional)</label>
            <input className={styles.fileInput} type="file" accept="image/*" onChange={(e) => {
              const f = e.target.files?.[0] ?? null
              setImageFile(f)
              if (f) setImagePreview(URL.createObjectURL(f))
              else setImagePreview(null)
            }} />
            {imagePreview && <img src={imagePreview} alt="preview" className={styles.preview} />}
            <label className={styles.label} style={{ marginTop: 8 }}>Image alt text</label>
            <input className={styles.input} value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} />
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.actions}>
            <button type="submit" disabled={loading} className={styles.primary}>
              {loading ? 'Posting…' : 'Publish Post'}
            </button>
          </div>

          <div className={styles.seoCard}>
            <SEOHint title={title} excerpt={excerpt} content={content} imageAlt={imageAlt} />
          </div>
        </form>
      </div>
    </div>
  )
}

function SEOHint({ title, excerpt, content, imageAlt }: { title: string, excerpt: string, content: string, imageAlt: string }) {
  const suggestions: string[] = []
  const titleLen = title.trim().length
  const excerptLen = excerpt.trim().length
  const contentLen = content.trim().length

  if (titleLen === 0) suggestions.push('Add an informative title (50–60 chars recommended).')
  else if (titleLen < 30) suggestions.push('Title is short — consider making it more descriptive.')
  else if (titleLen > 70) suggestions.push('Title is long — consider shortening to ~50–60 chars.')

  if (excerptLen === 0) suggestions.push('Add a meta description (50–160 chars) to improve SERP CTR.')
  else if (excerptLen < 50) suggestions.push('Meta description is short — expand to ~120 chars.')
  else if (excerptLen > 160) suggestions.push('Meta description is long — trim to ~155 chars.')

  if (contentLen < 300) suggestions.push('Content is short — aim for 300+ words for better ranking.')

  if (!imageAlt || imageAlt.trim().length === 0) suggestions.push('Add descriptive image alt text for accessibility and SEO.')

  return (
    <div>
      <strong>SEO suggestions</strong>
      <ul style={{ margin: '8px 0 0 16px' }}>
        {suggestions.length === 0 ? <li>Looks good — basic SEO checks passed.</li> : suggestions.map((s,i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  )
}
