import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-violet-950 text-violet-50 m-auto w-1/2 p-8">
      <Link href="/about">About</Link>

      <div className="h-10" />

      <h1 className="text-4xl mb-2">This is the home page</h1>
      <p className="text-xl">
        It is going to be served on AWS and used as an AWS playground
      </p>
    </div>
  );
}
