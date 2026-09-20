import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads')

export async function POST(request: Request) {
  try {
    const form = await request.formData()
    const file = form.get('image') as unknown as File | null
    if (!file || typeof (file as any).arrayBuffer !== 'function') {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const filename = `${Date.now()}-${(file as any).name || 'upload'}`.replace(/[^a-zA-Z0-9.\-_%]/g, '-')
    await fs.mkdir(UPLOAD_DIR, { recursive: true })
    const buffer = Buffer.from(await (file as any).arrayBuffer())
    const dest = path.join(UPLOAD_DIR, filename)
    await fs.writeFile(dest, buffer)

    const publicPath = `/uploads/${filename}`
    return NextResponse.json({ url: publicPath })
  } catch (err) {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
