import Link from "next/link"
import { experiences } from "@/data/experiences"

interface ExperienceDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { id } = await params

  const experience = experiences.find(
    (item) => item.id === Number(id)
  )

  if (!experience) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-4">
          Experience not found
        </h1>

        <Link href="/experiences" className="underline">
          Back to experiences
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen p-10">
      <Link href="/experiences" className="underline">
        ← Back to experiences
      </Link>

      <section className="mt-8 max-w-4xl">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="w-full h-96 object-cover rounded-2xl mb-8"
        />

        <h1 className="text-5xl font-bold mb-4">
          {experience.title}
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          {experience.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <p><strong>Category:</strong> {experience.category}</p>
          <p><strong>Destination:</strong> {experience.destination}</p>
          <p><strong>Price:</strong> ${experience.price}</p>
          <p><strong>Rating:</strong> ⭐ {experience.rating}</p>
        </div>
      </section>
    </main>
  )
}
  