import Link from "next/link";

export default function AcademyApply() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold">Apply for the Next Batch</h1>
      <p className="mt-4 text-slate-600">Your marketing career doesn't need another course. It needs real experience. Fill the form and we'll reach out.</p>

      <form className="mt-8 grid gap-4">
        <input placeholder="Name" className="rounded-md border px-4 py-3" />
        <input placeholder="Email" className="rounded-md border px-4 py-3" />
        <input placeholder="Phone" className="rounded-md border px-4 py-3" />
        <select className="rounded-md border px-4 py-3">
          <option>Group Batch</option>
          <option>Elite 1-on-1</option>
        </select>
        <textarea placeholder="Tell us about your goals" className="rounded-md border px-4 py-3" rows={4} />
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-[#0b61ff] px-6 py-3 text-white">Apply Now</button>
          <Link href="/academy" className="text-sm text-slate-600">Back to Academy</Link>
        </div>
      </form>
    </div>
  );
}
