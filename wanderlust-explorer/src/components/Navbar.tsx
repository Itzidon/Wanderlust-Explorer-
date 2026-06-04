import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <Link href="/" className="font-bold text-2xl">
          Wanderlust Explorer
        </Link>

        <div className="flex gap-6">
          <Link href="/experiences">Experiences</Link>
          <Link href="/favorites">Favorites</Link>
          <Link href="/profile">Profile</Link>
        </div>
      </div>
    </nav>
  )
}
