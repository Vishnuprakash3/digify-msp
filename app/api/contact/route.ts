import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    // TODO: wire this to email or CRM. Currently returns success for demo.
    console.log('contact form', { name, email, message });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
