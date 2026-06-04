import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-5xl font-bold mb-4">
          Wanderlust Explorer
        </h1>

        <p className="text-gray-600 mb-6">
          Discover unique experiences around the world
        </p>

        <Link
          href="/experiences"
          className="bg-black text-white px-6 py-3 rounded-lg inline-block"
        >
          Explore Experiences
        </Link>

      </div>
    </main>
  )
}