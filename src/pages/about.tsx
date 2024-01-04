import Link from "next/link";

export default function About() {
  return (
    <div className="bg-violet-950 text-violet-50 m-auto w-1/2 p-8">
      <Link href="/">Home</Link>

      <div className="h-10" />
      <h1 className="text-4xl mb-2">This is the about page</h1>
    </div>
  );
}
